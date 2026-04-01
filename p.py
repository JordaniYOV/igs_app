import time
import threading
from multiprocessing import Pool

def cpu_intensive(n):
    """Чистые вычисления — GIL мешает"""
    count = 0
    for i in range(n):
        count += i ** 2
    return count

# Тест 1: Последовательно
def sequential():
    start = time.time()
    cpu_intensive(5_000_000)
    cpu_intensive(5_000_000)
    return time.time() - start

# Тест 2: В потоках (GIL!)
def threaded():
    start = time.time()
    t1 = threading.Thread(target=cpu_intensive, args=(5_000_000,))
    t2 = threading.Thread(target=cpu_intensive, args=(5_000_000,))
    t1.start()
    t2.start()
    t1.join()
    t2.join()
    return time.time() - start

# Тест 3: В процессах (параллельно!)
def multiprocess():
    start = time.time()
    with Pool(2) as pool:
        pool.map(cpu_intensive, [5_000_000, 5_000_000])
    return time.time() - start

if __name__ == "__main__":
    print(f"Последовательно: {sequential():.2f}s")
    print(f"Потоки:         {threaded():.2f}s")      # ~ такое же время!
    print(f"Процессы:       {multiprocess():.2f}s")    # ~ в 2 раза быстрее на 2 ядрах