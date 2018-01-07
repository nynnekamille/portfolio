$(window).on("load", startHistorien);
$("#eva_container").addClass("startpos_eva_container")
$("#slange_container").addClass("slange_start_pos");
$("#tjek_telefon").hide();
$("#telefon").hide();
$("#valg_del").hide();
$("#valg_slet").hide();
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
    $("#startknap").on("click", eva_ind);
}

function eva_ind() {
    console.log("eva_ind");
    $("#startknap").off("click", eva_ind);
    $("#startknap").hide();
    $("#eva_container").addClass("eva_container_kommer_ind");
    $("#eva_walkcycle").addClass("eva_walkcycle_10frames");
    $("#eva_container").css("animation-play-state", "running");
    $("#eva_container").on("animationend", eva_drejer);
}

function eva_drejer() {
    console.log("eva drejer");
    $("#eva_container").off("animationend", eva_drejer);
    $("#eva_container").removeClass("startpos_eva_container");
    $("#eva_container").removeClass("eva_container_kommer_ind");
    $("#eva_container").addClass("kigpos_eva_container");
    $("#eva_walkcycle").removeClass("eva_walkcycle_10frames");
    $("#eva_container").addClass("eva_drejer");
    $("#eva_walkcycle").addClass("eva_kig_cycle");
    $("#eva_container").on("animationend", sms_lyd);
}

function sms_lyd() {
    console.log("sms_lyd");
    $("#sms_sound")[0].play();
    $("#tjek_telefon").show("slow");
    $("#tjek_telefon").on("click", start_zoomind)
}

function start_zoomind() {
    console.log("start_zoomind");
    $("#tjek_telefon").hide();
    $("#scene").addClass("zoomind");
    $("#scene").on("animationend", telefon_ind);
}

function telefon_ind() {
    console.log("telefon_ind");
    $("#telefon").show();
    $("#scene").off("animationend", telefon_ind);
    $("#telefon").addClass("telefon_billedecycle");
    $("#telefon").on("animationend", valg_knapper);
}

function slangeInd() {
    console.log(slangeInd);
    $("#telefon").off("animationend", slangeInd);
    $("#slange_container").removeClass("slange_start_pos");
    $("#slange_container").addClass("slange_flyver");
    $("#slange_sprite").addClass("slange_flyvecycle");

}

function valg_knapper() {
    console.log("Du trykkede del");
    $("#valg_del").show();
    $("#valg_slet").show();
    $("#valg_del").on("click", flod_ind);
    $("#valg_slet").on("click", engel_ind);

}

function flod_ind() {
    console.log("Flod ind");
    $("#telefon").hide();
    $("#valg_del").off("click", flod_ind);
    $("#valg_slet").off("click", engel_ind);
    $("#scene").removeClass("zoomind");
    $("#valg_del").hide();
    $("#valg_slet").hide();
    $("#flod").removeClass("flod_hide");
    $("#flod").addClass("flod_ind");
    $("#flod").on("animationend", baad_ind);

}

function baad_ind() {
    console.log("båd ind");
    $("#payoff1").removeClass("baad_hide");
    $("#payoff1").addClass("baad_ind");
}

function engel_ind() {
    console.log("engel ind");
    $("#telefon").hide();
    $("#valg_del").off("click", flod_ind);
    $("#valg_slet").off("click", engel_ind);
    $("#scene").removeClass("zoomind");
    $("#valg_del").hide();
    $("#valg_slet").hide();

    $("#payoff2").removeClass("engel_hide");
    $("#engel_container").addClass("engel_move");
    $("#payoff2").addClass("engel_ind");
}
