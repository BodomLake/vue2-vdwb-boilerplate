import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = `
                  -----BEGIN PUBLIC KEY-----
                  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCd4HY45lpfhzFqNnY6+jh21Cys
                  /fnmNtsQS3AUiqfkRMgqm4zMPR/kzZTLAjaBnfy+vYZqJ3yeR5K+W6Un4TQMJAJo
                  zLHLuA19HQhM/boR3loPLG6PvgUY/4ki4jYMyleJtaMXNn8BSN5mlgNoFvZ5NRUw
                  wWgSJJCAQsJVo4LWowIDAQAB
                  -----END PUBLIC KEY-----`

const privateKey = `
                    -----BEGIN RSA PRIVATE KEY-----
                    MIICXAIBAAKBgQCd4HY45lpfhzFqNnY6+jh21Cys/fnmNtsQS3AUiqfkRMgqm4zM
                    PR/kzZTLAjaBnfy+vYZqJ3yeR5K+W6Un4TQMJAJozLHLuA19HQhM/boR3loPLG6P
                    vgUY/4ki4jYMyleJtaMXNn8BSN5mlgNoFvZ5NRUwwWgSJJCAQsJVo4LWowIDAQAB
                    AoGBAJVKjeDui2UsPaE3kQPiXASaTQjlPivhkbPN8lWqbGsiU7pez3zPDFrbwKlc
                    FVjqofdo1zOI1YIDIpPZq8qTXhfks9ro4dAywUyQQfycyqj7VpcG7inqPXWbVORn
                    ytGQRjkycwULZhGJUtk0Ji7t6mDHyj+0sddIRUUT88YHOIwBAkEAy0L3cgJpWD0j
                    7Z8tphKt4BFpeMjaRsTxedW71T87QyIqCHUkGi3YoYTNcW0qOvlKV8h1N43VweU/
                    mWYqKzTOAQJBAMbW8uXvwkG8N6+c4uvw+mjFJiXVx6xAcsQnG7OScBPMTuga2ttV
                    ntCEKgxg7LeNxYxX9UeL10/RVELtrax7rKMCQCoT5+O7KhGxPoHPhQSvMz2CfUIa
                    2kzyMkcVfvfrShpgtTDhByNAQGtXcaw8fBSPTNuVTOa+PvUPvzXDV5FwMgECQEBm
                    WeFTGA2GUlrUa0KTl+bbA5H5fWQys3kIWZZ9dUNURrIyEHQ9dOSACcZclg6VIkhk
                    LJLxndjCKZJLvJZCsBUCQFx+BVpjOPoi07P105t50bG3HzmmrsHmeDOJaKOV24LA
                    fMhTytF9YkvGTOQJQVwe/zbNRJUixa6NjYiNnv327D4=
                    -----END RSA PRIVATE KEY-----`

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}