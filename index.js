'use strict';

const messagePanel = document.querySelector('#msg');
const dateStedryDen = dayjs('2021-12-24');
const dnes = dayjs();

if (dnes.isAfter(dateStedryDen)) {
  messagePanel.textContent = 'Ano byl.';
} else {
  messagePanel.textContent = 'Ještě ne.';
}
