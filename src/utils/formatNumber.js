/**
* formatNumber permite dar formato de moneta, utilizando 
* Intl.NumbweFormat 
*/
const formatNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

export default formatNumber;