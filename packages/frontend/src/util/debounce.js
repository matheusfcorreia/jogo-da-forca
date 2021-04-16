const debounce = (ref, fn, cancel = false, time = 500) => {
  if (ref.current || cancel) {
    clearTimeout(ref.current);
  }
  ref.current = setTimeout(fn, time);
};

export default debounce;
