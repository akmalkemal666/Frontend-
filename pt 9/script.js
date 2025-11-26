$(document).ready(function() {

    $("#addBtn").click(function() {
        const task = $("#taskInput").val();

        if (task.trim() === "") return;

        $("#taskList").append(`
            <li>
                ${task}
                <span class="delete-btn">X</span>
            </li>
        `);

        $("#taskInput").val("");
    });

    // Hapus item
    $("#taskList").on("click", ".delete-btn", function() {
        $(this).parent().fadeOut(200, function() {
            $(this).remove();
        });
    });

});
