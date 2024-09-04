$(document).ready(() => {
    const divElement = $('#div')
    divElement.css({ color: 'red', backgroundColor: 'yellow' })
    const h1 = $('<h1>')
    h1.text("this is not new element")
    $(document.body).append(h1)
    // divElement.append(h1)
    // divElement.remove()



    console.log(h1);

    $(document).ready(() => {
        const divElement = $('#div');
        const h1 = $("<h1>")
        const heading = $("#heading");
        h1.html("<i>this is new element</i>");
        divElement.append(h1);
        const value = $('#input').val();
        console.log(value);
        
        const newinput = $("<input>");
        const saveButton = $("<button>");
        newinput.val(value);
        saveButton.text("save");
        saveButton.click(() => {
            const newvalue = newinput.val();
            $("#input").val(newvalue);
            saveButton.remove();
            newinput.remove();

        });

        divElement.append(newinput, saveButton);

    });
});