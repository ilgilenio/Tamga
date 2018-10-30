# Tamga Yönergesi 2.0

## 0. Tanım
Bir Tamga, iki tek tırnak(`'`) arasında yazılan bir öge tanımlayıcısıdır. 

Örneğin: `'Tamga'`

## 1. Öge oluşturma

Bir Tamga'nın sonuna .el yazarak bir ögeye(DOM ögesine) dönüştürebilirsiniz.

```javascript

  'a'.el // bir a ögesi oluştur
  'p'.el // bir p ögesi oluştur

```

### 1.1 div ögesi oluşturma

Tamga'da `div` ön tanımlı öge türüdür. `div` ögesi oluşturmak için `div` yazmak gereksizdir.

```javascript

  ''.el // bir div ögesi oluştur

```

```html
  <div></div>
```

## 2. Kim tanımlama

`#` imi kullanılarak ögenin kimi(kimliği) tanımlanabilir.

```javascript

  '#kimlik'.el  // bir div ögesi oluştur, kim'ini "kimlik" yap

```

## 3. Sınıf tanımlama

`.` imi kullanılarak ögenin sınıflarını tanımlanabilir.

```javascript

  '.sınıf'.el /* bir div ögesi oluştur, 
                      * sınıfını "sınıf" yap
                      */
```

### 3.1. Yalın sınıf tanımı

`.` imi kullanmadan, büyük imlerle ya da arada boşluk bırakılarak, sınıf tanımlanarak öge oluşturulabilir.

```javascript

   'Sınıf'.el        /* bir div ögesi oluştur, 
                      * sınıfını "Sınıf" yap
                      */
  'sınıf1 sınıf2'.el /* bir div ögesi oluştur, 
                      * sınıflarını "Sınıf1 Sınıf2" yap
                      */
```

```html
  <div class="Sınıf"></div>
  <div class="sınıf1 sınıf2"></div>
```

> Önemli Bilgi! Küçük imler ile ve boşluksuz yazılması durumunda, sınıf değil özel öge türü tanımlanmış olur. (Bkz. 5) 

## 4. Nitelik tanımlama

`[nitelik="değer"]` biçiminde nitelikler tanımlanabilir.

```javascript
  //otagjs.org yerliğine bir bağlantı kuran a ögesi oluştur
  'a[href="//otagjs.org"]'.el

```

```html
  <a href="otagjs.org"></a>
```

## 5. Özel türden öge oluşturma

Küçük imler kullanılarak, özel öge türü tanımlanabilir.

```javascript
  
  'öge'.el // Bir öge ögesi oluştur

```

```html
  <öge></öge>
```

## 6. Girdilerle öge oluşturma

Belirli girdiler ile öge oluşturulabilir. 

Bu durumda oluşturulan ögenin `.set(girdiler...)` yöntemi çağrılır. Ögeler için .set uzantısı tanımlamak kullanışlıdır.

#### Örnek

```javascript
  // Görüntü Ögesine bir uzantı tanımla
  Image.prototype.set = function(URL) {
    this.src = URL
    return this
  }

  'img:/imlek.svg'.el // Bir görsel ögesi oluştur

```

```html
  <img src="/imlek.svg"/>
```

#### Örnek

```javascript
  let kaçın = Yazı =>
    Yazı
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
  
  // Ögeye bir uzantı tanımla
  Element.prototype.set = function(...girdi) {
    this.innerHTML = girdi
                      .map(kaçın)
                      .join('<br>')
    return this
  }

  'p:İlk dize:İkinci dize:Üçüncü dize'.el

```

```html
  <p>
    İlk Dize
    <br>
    İkinci Dize
    <br>
    Üçüncü Dize
  </p>
```