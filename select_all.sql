SELECT id, 
      REPLACE( company_name,E'\\', '''') || ' <br> Owner Name: ' || owner_name || '<br> Owner Mobile No: ' || owner_mob || '<br> Company Email: ' || email_address || '<br> Company Type: ' || company_type AS company_details,
       REPLACE(company_address,E'\\', '''') || '<br> Company Website: ' || company_web AS contact_details,
       replace(applied_awards, ',', '<br>') AS award_list,
       status,fill_all_details
FROM company_user
ORDER BY id DESC;