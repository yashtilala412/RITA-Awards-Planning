select pgp_sym_encrypt('id', 'aadfjjvijrejjfjnv', 'compress-algo=1, cipher-algo=aes256') as "id" from login_data where gmail = '{{variables.login_email}}';