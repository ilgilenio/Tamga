# Tamga Şablonlama Yönergesi 1.0

[Tamga Yönergesi](./Tamga.MD)'nde açıklanmış Tamgalar kullanılarak şablonlama yapılabilir.

## Kurallar
  1. Tamga şablonlaması için tamgaların tırnak ile başlayıp tırnak ile bitmez
  2. Belirli bir girinti uzunluğu belirlenmeli ve izlenmelidir
  3. Tamga şablonu aksan imleri (\` \) arasında yazılabilir.
  4. Boş dizeler yok sayılır
  5. `:` imiyle başlayan diziler Yazı düğümü olarak üst ögeye eklenir
  6. Tamga şablonu içinde (₺,₸,₼,$) imleri ile im sonda olacak biçimde değişken kullanılabilir
  
#### Örnek 

```javascript
  `
  header
    img#imlek:/imlek.svg
    .kullanıcı
      .ad:ad₺
      .soy:soy₺
  #body
    .içerik
      p: Yazı
      : Yazının geri kalanı
  footer
    a: Otağ 2018
  `

```