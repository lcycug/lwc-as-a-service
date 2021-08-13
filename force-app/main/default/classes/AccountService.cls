/**
 * @author Sean Lee
 * @date 2021-08-13
 * @description This class is used to service as an AccountService.
 */
public with sharing class AccountService {
    private static final List<String> ELIGIBLE_ACCOUNT_NUMBER_LIST = Label.Eligible_Account_Number_List.split(Constants.SEMI_COLON_REGEXP_SPACE_IGNORED);
    @AuraEnabled
    public static Boolean checkEligibility(Id idAccount) {
        return String.isNotBlank(idAccount) && [SELECT COUNT() FROM Account WHERE Id = :idAccount AND AccountNumber IN :ELIGIBLE_ACCOUNT_NUMBER_LIST] > 0;
    }
}