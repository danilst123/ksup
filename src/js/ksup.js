$(function() {

	// Табы
	$('.tabs__nav-item').click(function(e) {
		e.preventDefault();

		$(this)
			.addClass('tabs__nav-item--active')
			.siblings()
			.removeClass('tabs__nav-item--active')

		var destination = $(this).find('.tabs__link').attr('href');
		
		$('.tabs__tab').fadeOut(0);

		$('.tabs__tab' + destination).fadeIn(400);
	});


	// Закрыть модальное окно
	$('.modal__close, .modal__bg').click(function() {
		$(this).closest('.modal').fadeOut(400);
	});

	// Custom selects
	$('.select').each(function(index, item) {
	  var selectWrapper = $(this),
	      select = selectWrapper.find('select'),
	      isInModal = selectWrapper.parents('.modal').length ? true : false;

	  select
	    .css({'width': '100%'})
	    .select2({
	      allowClear: false,
	      minimumResultsForSearch: -1,
	      shouldFocusInput: -1,
	      closeOnSelect: true,
	      "language": {
	        "noResults": function(){
	          return "Результаты не найдены";
	        }
	      }
	    })    
	    .on('select2:open', function (e) {
	      dropdown = $('.select2-dropdown');
	      setModalClasses();
	    });

	  function setModalClasses() {
	    if ( isInModal ) {
	      if ( selectWrapper.parents('.modal').hasClass('modal--3') ) {
	        dropdown.closest('.select2-container').addClass('select2-container--in-modal-3');
	      } else if ( selectWrapper.parents('.modal').hasClass('modal--2') ) {
	        dropdown.closest('.select2-container').addClass('select2-container--in-modal-2');
	      } else {
	        dropdown.closest('.select2-container').addClass('select2-container--in-modal');
	      }
	    }
	  }
	});

	// docs slide
	$('.docs-slidable__head').click(function(e) {
		$(this)
			.toggleClass('docs-slidable__head--collapsed')
			.next()
			.slideToggle('400');
	});


	// Расчет максимальной высоты тела и максимальной ширины контейнера модального окна
	function setModalSizes() {

		var windowWidth = $(window).width(),
				windowHeight = $(window).outerHeight(),
				modalHeadHeight = $('.modal__head').outerHeight(),
				modalBodyHeight = $('.modal__body').outerHeight(),
				modalBoxMaxWidth = parseInt($('.modal__box').css('max-width'));

		var modalBodyMaxHeight;

		modalBodyMaxHeight = windowHeight - modalHeadHeight - 40;

		// если на десктопах появляется скролл, который влияет на ширину контента
		if ( modalBodyHeight > modalBodyMaxHeight ) {
			modalBoxMaxWidth = 1260;
		}

		$('.modal__body').css({
			'max-height': modalBodyMaxHeight + 'px'
		});

		$('.modal__box').css({
			'max-width': modalBoxMaxWidth + 'px'
		});
	}


	setModalSizes(); // Расчет максимальной высоты тела и максимальной ширины контейнера модального окна


	$(window).resize(function() {
		setModalSizes(); // Расчет максимальной высоты тела и максимальной ширины контейнера модального окна
	});
	

});