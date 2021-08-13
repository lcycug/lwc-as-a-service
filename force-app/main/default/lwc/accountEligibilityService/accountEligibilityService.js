/**
 * @author Sean Lee
 * @date 2021-08-03
 * @description This component is used to service as an Account Eligibility Service.
 */
import checkEligibility from "@salesforce/apex/AccountService.checkEligibility";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

const checkEligibilityStatus = function (idAccount) {
    return checkEligibility({ idAccount })
        .then((response) => response === true)
        .catch((error) => {
            dispatchEvent(
                new ShowToastEvent({
                    title: "Error happened during checking Account Eligibility",
                    message: error.body.message,
                    variant: "warning"
                })
            );
        });
};
export { checkEligibilityStatus };
