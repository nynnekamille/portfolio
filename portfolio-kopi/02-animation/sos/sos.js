$(window).on("load", startHistorien);
/// START ///
function startHistorien() {
    console.log("startHistorien");
    $("#vingebask_sound")[0].play();
    $("#fugl_container").removeClass("fugl_start_pos");
    $("#fugl_container").addClass("fugl_flyver");
    $("#fugl_sprite").addClass("fugl_flyvecycle");
    $("#startknap").hide();
    $("#fugl_container").on("animationend", fuglenErInde);
}

function fuglenErInde() {
    $("#startknap").show();
    $("#startknap").on("click", start_f);
}
// Intro funktioner //
function start_f() {
    console.log("Siden er nu loadet.");
    $("#startknap").off("click", start_f);
    // Remove
    $("#startknap").hide();
    $("#fugl_container").on("animationend", eva_ind);
}

function eva_ind() {
    console.log("Eva kommer ind");
    $("#eva").css("animation-play-state", "running");
    $("#eva").on("animationend", sms_lyd);
}

function sms_lyd() {
    $("#sms_sound")[0].play();
}
