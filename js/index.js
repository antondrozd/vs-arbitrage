import BarChart from './barChart.js';
import addCitiesDataToFields from './addCitiesDataToFields.js';
import initSelectPicker from './selectpicker.js';
import renderResult from './renderResult.js';

$(document).ready(() => {
  fetch('../data/cities.json')
    .then(res => res.json())
    .then(data => {
      addCitiesDataToFields(data);
    })
    .catch(err => {
      console.error(err);
    })
    .then(initSelectPicker);

  $('#sum').on('focus', function() {
    $(this).select();
  });

  $('#showResult').on('click', event => {
    event.preventDefault();

    const $sum = $('#sum');

    if (!$sum.val()) return $sum.focus();

    renderResult($('#result'));
  });

  new BarChart({ maxBarHeight: 175, animation: 'fadeIn' }).renderBars();
  new WOW().init();
});
