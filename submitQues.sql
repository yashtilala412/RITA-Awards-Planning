UPDATE "company_user"
SET fill_all_details = 1
WHERE login_id = {{variables.login_id}};