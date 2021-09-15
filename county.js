    // console.log('соотношение   ', 300*0.9)
    // /*
    //
    // на потім
    // * 1 попап робити через окрему компоненту
    //     fullitem робити через окрему компоненту  з прокидуванням пропсів
    // *       concertITmessCOntrolers .changeITems зробити поциклу чи по промісах бо там ккупа повторів і то  херня виходить
    // *    поладити ту херню з комментами
    // *
    // * */
    // console.log(gethostbyaddr())





    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.1"> </script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0"> </script>

    <!-- Replace this with your image. Make sure CORS settings allow reading the image! -->
    <img id="img" src="cat.jpg"></img>


    // Notice there is no 'import' statement. 'mobilenet' and 'tf' is
    // available on the index-page because of the script tag above.

    const img = document.getElementById('img');

    // Load the model.
    mobilenet.load().then(model => {
        // Classify the image.
        model.classify(img).then(predictions => {
            console.log('Predictions: ');
            console.log(predictions);
        });
    });
    </script>














