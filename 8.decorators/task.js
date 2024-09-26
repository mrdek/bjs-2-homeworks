function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash = args.join(',');
      let idx = cache.findIndex((item)=> item.hash === hash );
      if (idx !== -1 ) {
          console.log("Из кеша: " + cache[idx].value);
          return "Из кеша: " + cache[idx].value;
      }

      let value = func(...args);

      cache.push({
        hash,
        value,
      });

      if (cache.length > 5) { 
        cache.shift(0);
      }

      console.log("Вычисляем: " + value);
      return "Вычисляем: " + value;  
  }
  return wrapper;
}

function debounceDecoratorNew(func, timeout = 0) {
  let timeoutId = null;
  let canRunFunc = true;

  function wrapper(...args) {
    if (!canRunFunc) {
      return;
    }

    func.apply(this, args);
    wrapper.count = wrapper.count + 1;

    canRunFunc = false;

    timeoutId = setTimeout(() => {
      canRunFunc = true;
    }, timeout);
  }

  wrapper.count = 0;

  return wrapper;
}

