
let buttonOptionsFun = function (app, page) {
    if (page == "btnFeedback" || page == "btnFeedbackGz" || page == "btnYAFeedBack") {
        app.$router.push({ name: "FeedBack" }); // 办理反馈
    } else if (page == "btnEnd1" || page == "btnEnd2" || page == "btnEnd3" || page == "btnMediaEnd") {
        app.$router.push("/dataArchive/gd"); // 归档
    } else if (page == "btnVoid1" || page == "btnVoid2" || page == "btnVoid3") {
        app.$router.push("/dataArchive/zf"); // 作废
    } else if (page == "btnAccept" || page == "btnAccept1" || page == "btnAccept3" || page == "btnAccept4" ||
        page == "btnAcceptReport" || page == "btnOfficeCheck" || page.indexOf('ApplyCheck') != -1) {
        if (typeof app.checkMessage == "function") {
            if (app.checkMessage()) {
                return;
            }
            if (typeof app.saveData == 'function') {
                app.saveData(2)
            } else {
                app.$router.push("/workFlow"); // 内部审批
            }
        } else {
            app.$router.push("/workFlow"); // 内部流转
        }
    } else if (page == "btn_ConPetitioner") {
        app.$router.push({ name: "AppealPeople", params: { text: "Contact" } }); // 联系诉求人
    } else if (page == "btn_ReplyPetitioner") {
        app.$router.push({ name: "AppealPeople", params: { text: "Reply" } }); // 答复诉求人
    } else if (page == "btnReject") {
        app.$router.push({ name: "Return" }); // 退回
    } else if (page == "btnRejectUpper") {
        app.$router.push({ name: "ReturnSendCompany" }); // 退回派发单位
    } else if (page == "btnRejectLower" || page == "btnRejectLower2" || page == "btnRejectCirculate") {
        app.$router.push({ name: "ReturnOrganize" }); // 退回承办单位
    } else if (page == "btnDelay") {
        app.$router.push({ name: "DelayApplyFor" }); // 延期申请
    } else if (page == "btnReceive") {
        if (typeof app.receive == "function") {
            app.receive() // 接收
        }
    } else if (page == "btnDelayApprove") {
        app.$router.push({ name: "DelayCheck" }); // 延期审批
    } else if (page == "btnEndCase") {
        app.$router.push({ name: "CloseCase" }); // 结案综述
    } else if (page == "btnRead10" || page == "btnReadPetition" || page == "btnReadXNB" || page == "btnRead9" || page == "btnRead" || page == "btnRead2" || page == "btnRead1") {
        if (typeof app.read == "function") {
            app.read(page) // 已阅
        }
    } else if (page == "btnDispatch" || page == "btnDispatch2" || page == "btnDispatchX" || page == "btnDispatchOther" || page == "btnAcceptDispatch" || page == "btnDispatchX1" || page == "btnDispatchJ") {
        if (app.isDuBan) {
            app.$router.push({
                name: "Cooperation",
                params: { text: app.isDuBan, from: 'null' }
            }); // 协同派发
        } else {
            if (typeof app.checkMessage == "function") {
                if (app.checkMessage()) {
                    return;
                }
            }
            app.$router.push({
                name: "Cooperation",
                params: { text: "0", from: 'null' }
            }); // 协同派发
        }
    } else if (page == "btnSave" || page == "btnSave2" || page == "btnDeptAccept") {
        if (typeof app.saveData == "function") {
            app.saveData() // 暂存
        }
    } else if (page == "btnUpdateCaseInfo") {
        // 修改基本信息
        if (app.editTitleClass == false && app.editContentClass == false && app.remarkClass == false && app.modification == false) {
            app.modification = true;
            app.editTitleClass = true;
            app.editContentClass = true;
            app.remarkClass = true
            app.modification = true;
        }
    } else if (page == 'btnAcceptAgainHF') {
        // 重新受理
        if (typeof app.againWaitAccept == "function") {
            app.againWaitAccept()
        }
    } else if (page == "btnSubmitXNB" || page == "btnSubmitXCDC") {
        // 提交效能督察,提交现场督察
        if (typeof app.SubmitDC == "function") {
            app.SubmitDC(page)
        }
    }

}

export default buttonOptionsFun