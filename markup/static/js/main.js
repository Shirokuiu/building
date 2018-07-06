'use strict';

// House
(function () {
  var house = document.querySelector('.house');
  var preview = house.querySelector('.house__preview');
  var previewSell = preview.querySelector('.house__preview-sell');
  var previewSection = preview.querySelector('.house__preview-section');
  var previewFloor = preview.querySelector('.house__preview-floor');
  var floor = house.querySelectorAll('.house__appartment-link');
  var timerId;
  var coords = {
    x: 0,
    y: 0
  };
  var popup = document.querySelector('.house__popup');
  var exit = popup.querySelector('.house__popup-exit');
  var popupFloor = popup.querySelector('.house__popup-headline-floor');
  var popupSection = popup.querySelector('.house__popup-headline-section');
  var popupImg = popup.querySelector('.house__popup-img');
  var popupRooms = {
    room1: popup.querySelector('.house__popup-img-room1-link'),
    room2: popup.querySelector('.house__popup-img-room2-link'),
    room3: popup.querySelector('.house__popup-img-room3-link'),
    room4: popup.querySelector('.house__popup-img-room4-link'),
    setSell: function (obj) {
      var classString = obj.classList[0] + '--sell';
      
      return classString;
    }
  };
  var popupRooms6 = document.querySelector('.house__popup--rooms6');
  var exitPopupRooms6 = popupRooms6.querySelector('.house__popup-exit');
  var popupFloorPopupRooms6 = popupRooms6.querySelector('.house__popup-headline-floor');
  var popupSectionPopupRooms6 = popupRooms6.querySelector('.house__popup-headline-section');
  var objPopupRooms6 = {
    room1: popupRooms6.querySelector('.house__popup-img-room1-6-link'),
    room2: popupRooms6.querySelector('.house__popup-img-room2-6-link'),
    room3: popupRooms6.querySelector('.house__popup-img-room3-6-link'),
    room4: popupRooms6.querySelector('.house__popup-img-room4-6-link'),
    room5: popupRooms6.querySelector('.house__popup-img-room5-6-link'),
    room6: popupRooms6.querySelector('.house__popup-img-room6-6-link'),
    setSell: function (obj) {
      var classString = obj.classList[0] + '--sell';
      
      return classString;
    }
  };
  
  if (document.body.clientWidth > 1024) {
    house.addEventListener('mousemove', function (evt) {
      coords.x = evt.clientX;
      coords.y = evt.clientY;

      if (coords.y < 130 || coords.y > 600) {
        var pos = preview.style.top;

        preview.style.top = pos;
      } else {
        preview.style.top = (coords.y - 150) + 'px';
      };
      preview.style.left = (coords.x - 200) + 'px';
    });
  };
  
  for (var i = 0, len = floor.length; i < len; i++) {
    if (document.body.clientWidth > 1366) {
      floor[i].addEventListener('mouseenter', function() {
        var dataFloor = {
          dataSell: this.dataset.selling,
          dataSection: this.dataset.section,
          dataFloor: this.dataset.floor
        };

        clearTimeout(timerId);

        preview.classList.remove('house__preview--hidden');

        if (parseInt(dataFloor.dataSell, 10) === 0) {
          preview.classList.add('house__preview--red');
        } else {
          preview.classList.remove('house__preview--red');
        }

        previewSell.textContent = dataFloor.dataSell;
        previewSection.textContent = dataFloor.dataSection;
        previewFloor.textContent = dataFloor.dataFloor;
      });
      
      floor[i].addEventListener('mouseleave', function () {
        timerId = setTimeout(function () {
          preview.classList.add('house__preview--hidden');
        }, 1000);
      });
    }
    
    floor[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      
      var dataFloor = this.dataset.floor;
      var dataSection = this.dataset.section;
      var dataSellingPosition = this.dataset.sellingPosition;
      var dataRooms = this.dataset.rooms;
      
      if (dataRooms === '6') {
        popupRooms6.classList.remove('hidden');
        popupFloorPopupRooms6.textContent = dataFloor;
        popupSectionPopupRooms6.textContent = dataSection;
      } else {
        popup.classList.remove('hidden');
      }
      
      popupFloor.textContent = dataFloor;
      popupSection.textContent = dataSection;
      
      if (dataSellingPosition === '0') {
        popupRooms.room1.classList.remove(popupRooms.setSell(popupRooms.room1));
        popupRooms.room2.classList.remove(popupRooms.setSell(popupRooms.room2));
        popupRooms.room3.classList.remove(popupRooms.setSell(popupRooms.room3));
        popupRooms.room4.classList.remove(popupRooms.setSell(popupRooms.room4));
        popupRooms.room1.href = '#';
        popupRooms.room2.href = '#';
        popupRooms.room3.href = '#';
        popupRooms.room4.href = '#';
      }
      
      if (dataSellingPosition === '1') {
        popupRooms.room1.classList.add(popupRooms.setSell(popupRooms.room1));
        popupRooms.room2.classList.remove(popupRooms.setSell(popupRooms.room2));
        popupRooms.room3.classList.remove(popupRooms.setSell(popupRooms.room3));
        popupRooms.room4.classList.remove(popupRooms.setSell(popupRooms.room4));
        popupRooms.room2.href = '#';
        popupRooms.room3.href = '#';
        popupRooms.room4.href = '#';
      }
      
      if (dataSellingPosition === '2') {
        popupRooms.room1.classList.add(popupRooms.setSell(popupRooms.room1));
        popupRooms.room2.classList.add(popupRooms.setSell(popupRooms.room2));
        popupRooms.room3.classList.remove(popupRooms.setSell(popupRooms.room3));
        popupRooms.room4.classList.remove(popupRooms.setSell(popupRooms.room4));
        popupRooms.room3.href = '#';
        popupRooms.room4.href = '#';
      }
      
      if (dataSellingPosition === '3') {
        popupRooms.room1.classList.add(popupRooms.setSell(popupRooms.room1));
        popupRooms.room2.classList.add(popupRooms.setSell(popupRooms.room2));
        popupRooms.room3.classList.add(popupRooms.setSell(popupRooms.room3));
        popupRooms.room4.classList.remove(popupRooms.setSell(popupRooms.room4));
        popupRooms.room4.href = '#';
      }
      
      if (dataSellingPosition === '4') {
        popupRooms.room1.classList.add(popupRooms.setSell(popupRooms.room1));
        popupRooms.room2.classList.add(popupRooms.setSell(popupRooms.room2));
        popupRooms.room3.classList.add(popupRooms.setSell(popupRooms.room3));
        popupRooms.room4.classList.add(popupRooms.setSell(popupRooms.room4));
      }
      
      if (dataSellingPosition === '6') {
        objPopupRooms6.room1.classList.add(popupRooms.setSell(objPopupRooms6.room1));
        objPopupRooms6.room2.classList.add(popupRooms.setSell(objPopupRooms6.room2));
        objPopupRooms6.room3.classList.add(popupRooms.setSell(objPopupRooms6.room3));
        objPopupRooms6.room4.classList.add(popupRooms.setSell(objPopupRooms6.room4));
        objPopupRooms6.room5.classList.add(popupRooms.setSell(objPopupRooms6.room5));
        objPopupRooms6.room6.classList.add(popupRooms.setSell(objPopupRooms6.room6));
      }
      
      if (dataSellingPosition === '1 1 1 1 0 1') {
        objPopupRooms6.room1.classList.add(popupRooms.setSell(objPopupRooms6.room1));
        objPopupRooms6.room2.classList.add(popupRooms.setSell(objPopupRooms6.room2));
        objPopupRooms6.room3.classList.add(popupRooms.setSell(objPopupRooms6.room3));
        objPopupRooms6.room4.classList.add(popupRooms.setSell(objPopupRooms6.room4));
        objPopupRooms6.room6.classList.add(popupRooms.setSell(objPopupRooms6.room6));
        objPopupRooms6.room5.classList.remove(popupRooms.setSell(objPopupRooms6.room5));
        objPopupRooms6.room5.href = '#';
      }
      
      if (dataSellingPosition === '2 0 1') {
        popupRooms.room1.classList.add(popupRooms.setSell(popupRooms.room1));
        popupRooms.room2.classList.add(popupRooms.setSell(popupRooms.room2));
        popupRooms.room4.classList.add(popupRooms.setSell(popupRooms.room4));
        popupRooms.room3.classList.remove(popupRooms.setSell(popupRooms.room3));
        popupRooms.room3.href = '#';
      }
      
      if (dataSellingPosition === '0 0 1 0') {
        popupRooms.room3.classList.add(popupRooms.setSell(popupRooms.room3));
        popupRooms.room1.classList.remove(popupRooms.setSell(popupRooms.room1));
        popupRooms.room2.classList.remove(popupRooms.setSell(popupRooms.room2));
        popupRooms.room4.classList.remove(popupRooms.setSell(popupRooms.room4));
        popupRooms.room1.href = '#';
        popupRooms.room2.href = '#';
        popupRooms.room4.href = '#';
      }
      
      if (dataSellingPosition === '0 1 1 0') {
        popupRooms.room2.classList.add(popupRooms.setSell(popupRooms.room2));
        popupRooms.room3.classList.add(popupRooms.setSell(popupRooms.room3));
        popupRooms.room1.classList.remove(popupRooms.setSell(popupRooms.room1));
        popupRooms.room4.classList.remove(popupRooms.setSell(popupRooms.room4));
        popupRooms.room1.href = '#';
        popupRooms.room4.href = '#';
      }
      
      if (dataSellingPosition === '0 1 1 1') {
        popupRooms.room2.classList.add(popupRooms.setSell(popupRooms.room2));
        popupRooms.room3.classList.add(popupRooms.setSell(popupRooms.room3));
        popupRooms.room4.classList.add(popupRooms.setSell(popupRooms.room4));
        popupRooms.room1.classList.remove(popupRooms.setSell(popupRooms.room1));
        popupRooms.room1.href = '#';
      }
      
      if (dataSellingPosition === '1 0 0 1') {
        popupRooms.room1.classList.add(popupRooms.setSell(popupRooms.room1));
        popupRooms.room4.classList.add(popupRooms.setSell(popupRooms.room4));
        popupRooms.room2.classList.remove(popupRooms.setSell(popupRooms.room2));
        popupRooms.room3.classList.remove(popupRooms.setSell(popupRooms.room3));
        popupRooms.room2.href = '#';
        popupRooms.room3.href = '#';
      }
      
      if (dataSellingPosition === '1 0 1 1') {
        popupRooms.room1.classList.add(popupRooms.setSell(popupRooms.room1));
        popupRooms.room3.classList.add(popupRooms.setSell(popupRooms.room3));
        popupRooms.room4.classList.add(popupRooms.setSell(popupRooms.room4));
        popupRooms.room2.classList.remove(popupRooms.setSell(popupRooms.room2));
        popupRooms.room2.href = '#';
      }
      
      if (dataSellingPosition === '0 0 1 1') {
        popupRooms.room3.classList.add(popupRooms.setSell(popupRooms.room3));
        popupRooms.room4.classList.add(popupRooms.setSell(popupRooms.room4));
        popupRooms.room1.classList.remove(popupRooms.setSell(popupRooms.room1));
        popupRooms.room2.classList.remove(popupRooms.setSell(popupRooms.room2));
        
        popupRooms.room1.href = '#';
        popupRooms.room2.href = '#';
      }
      
      if (dataSellingPosition === '1 0 1 1') {
        popupRooms.room1.classList.add(popupRooms.setSell(popupRooms.room1));
        popupRooms.room3.classList.add(popupRooms.setSell(popupRooms.room3));
        popupRooms.room4.classList.add(popupRooms.setSell(popupRooms.room4));
        popupRooms.room2.classList.remove(popupRooms.setSell(popupRooms.room2));
        popupRooms.room2.href = '#';
      }
      
      if (dataSellingPosition === '1 1 0 1') {
        popupRooms.room1.classList.add(popupRooms.setSell(popupRooms.room1));
        popupRooms.room2.classList.add(popupRooms.setSell(popupRooms.room2));
        popupRooms.room4.classList.add(popupRooms.setSell(popupRooms.room4));
        popupRooms.room3.classList.remove(popupRooms.setSell(popupRooms.room3));
        popupRooms.room3.href = '#';
      }
    });
  };
  
  exit.addEventListener('click', function () {
    popup.classList.add('hidden');
    popupRooms.room1.classList.remove(popupRooms.setSell(popupRooms.room1));
    popupRooms.room2.classList.remove(popupRooms.setSell(popupRooms.room2));
    popupRooms.room3.classList.remove(popupRooms.setSell(popupRooms.room3));
    popupRooms.room4.classList.remove(popupRooms.setSell(popupRooms.room4));
    popupRooms.room1.removeAttribute('href');
    popupRooms.room2.removeAttribute('href');
    popupRooms.room3.removeAttribute('href');
    popupRooms.room4.removeAttribute('href');
  });
  
  exitPopupRooms6.addEventListener('click', function () {
    popupRooms6.classList.add('hidden');
    objPopupRooms6.room1.classList.remove(popupRooms.setSell(objPopupRooms6.room1));
    objPopupRooms6.room2.classList.remove(popupRooms.setSell(objPopupRooms6.room2));
    objPopupRooms6.room3.classList.remove(popupRooms.setSell(objPopupRooms6.room3));
    objPopupRooms6.room4.classList.remove(popupRooms.setSell(objPopupRooms6.room4));
    objPopupRooms6.room5.classList.remove(popupRooms.setSell(objPopupRooms6.room5));
    objPopupRooms6.room6.classList.remove(popupRooms.setSell(objPopupRooms6.room6));
    objPopupRooms6.room1.removeAttribute('href');
    objPopupRooms6.room2.removeAttribute('href');
    objPopupRooms6.room3.removeAttribute('href');
    objPopupRooms6.room4.removeAttribute('href');
    objPopupRooms6.room5.removeAttribute('href');
    objPopupRooms6.room6.removeAttribute('href');
  });
})();

// Aside button
(function () {
  var aside = document.querySelector('.aside');
  var button = aside.querySelector('.aside__burder');
  
  if (document.body.clientWidth < 1570) {
    aside.classList.add('aside--close');
    button.addEventListener('click', function () {
      aside.classList.toggle('aside--close');
    });
  }
})()
