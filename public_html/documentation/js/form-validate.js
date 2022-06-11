$(document).ready(function(){
    $('#emailForm').validate({
        debug: true,
        errorClass: 'alert alert-danger',
        ErrorLabelContainer: '#output-area',
        errorElement: 'div',
        // rules to define good and bad inputs
        // each rule starts with the form input element's NAME attribute
        rules: {
            name: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000
            }
        },
        messages: {
            name: {
                required: 'Name is required.'
            },
            email: {
                email: 'Please provide a valid email address',
                required: 'Email is required.'
            },
            message: {
                required: 'A message is required.',
                maxlength: 'Message must be 2000 characters or less.'
            }
        },
        submitHandler: (form) => {
            $('#emailForm').ajaxSubmit({
                type: 'POST',
                url: $('#emailForm').attr('action'),
                success:(ajaxOutput) => {
                    $('#output-area').css('display', '')
                    $('#output-area').html(ajaxOutput)

                    if($('.alert-success') >= 1){
                        $('#emailForm')[0].reset()
                    }
                }
            })
        }
    })
})