UPDATE company_user SET company_name='{{variables.companyName}}', owner_name='{{variables.ownerName}}', owner_mob='{{variables.ownerMobile}}', company_address='{{variables.companyAddress}}', email_address='{{variables.companyEmail}}', company_type='{{variables.companyType}}', applied_awards='{{variables.companyAwards}}', company_web='{{variables.companyWebsite}}', company_strength= '{{variables.companyStrength}}',company_proof = '{{variables.companyRegistration}}',url= 'upload-prod/{{variables.login_id + '/'+  localStorage.getItem('cName')   + '/'+ localStorage.getItem('documentfilePath')}}',date_updated=now() WHERE login_id= {{variables.login_id}};