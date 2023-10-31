
$(document).ready(function () {
    $('.saveBtn').on('click', function () {

        var value=$(this).siblings('.description').val();
        var time=$(this).parent().attr('id');

        // saves user changes to localStorage.
        localStorage.setItem(time, value);

        // displays green check mark when something is saved to localStorage.
        $('.notification').addClass('show');

        // the checkmark is removed after 5 seconds.
        setTimeout(function () {
            $('.notification').removeClass('show');
        },5000);
    });

    // adds past, present, or future class to each time
    // block by comparing the id to the current hour. 
    function hourUpdater() {
        var currentHour=dayjs().hour();

        $('.time-block').each(function() {
            var block=parseInt($(this).attr('id').split('-')[1]);

            if (block < currentHour) {
                $(this).addClass('past');
            } else if (block === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else  {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }

    hourUpdater();

    // checks every 15 if current time needs to be updated.
    setInterval(hourUpdater, 15000);

    // takes user input that was saved in localStorage and sets
    // the values of the corresponding text area elements.
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    // displays current date in the header of the page.
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

});
  