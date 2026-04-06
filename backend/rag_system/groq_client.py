from urllib import response
from annotated_types import Ge
from groq import Groq
import groq
from backend.config import settings


class GroqClient:
    system_prompt = """Ты — помощник, который объясняет страхование подросткам 14-17 лет. 
Объясняй просто, но уважительно — не занудно.

КРИТИЧЕСКИ ВАЖНЫЕ ПРАВИЛА:
1. Если ответа нет в документах — честно скажи: "В документах нет информации по этому вопросу"
2. НЕ додумывай цифры, суммы, даты — только факты из документов
3. Указывай источник информации
4. Избегай сложных юридических терминов
5. Давай примеры из жизни подростка (телефон, велосипед, автошкола)
6. Можешь использовать сленг умеренно
"""
    
    instruction = """ПРИМЕР хорошего объяснения:
Вопрос: "Что такое франшиза?"
Плохо: "Франшиза — это часть убытка, не возмещаемая страховщиком"
Хорошо: "Представь, что у тебя сломался велосипед 🚲. Франшиза — это сумма, которую папа сначала 
заплатит сам, а страховая доплатит остальное. Например, если франшиза 1000 рублей, а ремонт стоит 5000 — 
папа платит 1000, а страховая 4000. Это как в игре, где ты тоже вкладываешься, а не только бесплатно лечишься 😊"
"""
    def __init__(self): 
        self.client = Groq(api_key=settings.GROQ_API_KEY)

    def system_prompt_builder(self, documents: list[dict] = None) -> str: 
        """Build prompt with context"""

        context_parts = []
        if documents:
            for i, doc in enumerate(documents, 1): 
                source_info = f"Документ: {doc['source']}"
                if doc.get('page'): 
                    source_info += f", стр.{doc['page']}"
                
                context_parts.append(
                    f"[{i}] {source_info} (релевантность: {doc['similarity']})\n"
                    f"Текст: {doc['content']}"
                )
        
        context = "\n---\n".join(context_parts)

        prompt = f"""{self.system_prompt}
{self.instruction}

Документы для ответа:
{context}

Ответь в фформате:
Ответ: [твой ответ]
Уверенность: [high/medium/low/unknow]
Объяснение: [почему такая уверенность]
"""
        return prompt


    def generate(self, question: str, documents: list[dict] = None):
        """Answer generation using groq"""
        stream = self.client.chat.completions.create(
            messages=[
                {
                    "role": "system", 
                    "content": self.system_prompt_builder(),
                }, 
                {
                    "role": "user", 
                    "content": f"{question}",
                }
            ], 
            model=settings.GROQ_GENERATION_MODEL, 

            temperature=0.5, 
            max_completion_tokens=1024, 
            top_p=1,
            stop=None, 
            stream=True,
        )

        for chunk in stream:
            if chunk.choices[0].delta.content: 
                yield chunk.choices[0].delta.content

groq_client = GroqClient()

if __name__ == "__main__": 
    gen = GroqClient()
    print(gen.generate("Что такое страховка?"))