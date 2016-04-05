define(function() {

  function numberFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return {
      numberFormat : numberFormat
  }
});
