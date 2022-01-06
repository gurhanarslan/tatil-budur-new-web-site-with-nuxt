const GroupBy = (xs, key) => {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
export default (context, inject) => {
    inject('api', {
        autocomplete: (search) => {
            const data = require('@/static/data/autocomplete.json')
            const response = data.filter(d => d.label.toLowerCase().includes(search.toLowerCase()))
            const result = GroupBy(response, 'category')
            return result;
             
        }
    })
}