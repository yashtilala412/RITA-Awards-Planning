UPDATE login_data
SET admin_status = 
    CASE admin_status
        WHEN 1 THEN 0
        WHEN 0 THEN 1
        ELSE admin_status
    END
WHERE id = {{variables.userID}};