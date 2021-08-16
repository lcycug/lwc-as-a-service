/**
 * @author Sean Lee
 * @date 2021-08-13
 * @description This component is used to call a lwc service.
 */
({
    checkAccountEligibility: function (component) {
        let idAccount = component.get("v.recordId"),
            service = component.find("service"),
            { checkEligibilityStatus } = service || {};
        if (checkEligibilityStatus) {
            checkEligibilityStatus(idAccount).then((response) => {
                component.set("v.boolEligible", response === true);
            });
        }
    }
});
