const HU = {
  date(date) {
    return new Intl.DateTimeFormat('hu-HU').format(date);
  },
  curreny(amount) {
    return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'Huf' }).format(amount);
  },
  list(strings) {
    return strings.map((str, i, arr) => {
      if (i === arr.length - 1) return `és ${str}`;
      return (i === arr.length - 2) ? `${str} ` : `${str}, `;
    }).join('');
  },
};

// export default HU
export { HU as default };
