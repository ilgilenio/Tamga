# Tamga
Tamga, JavaScript DOM için tasarlanmış kolay Yazım tekniğidir.

🌑[Otağ JS](https://otagjs.org)'de ögeler Tamga Yazımı ile oluşturulur.

```JavaScript
'a#kimlik.sınıf[nitelik="değer"]'.init()
```
==

```HTML
<a id="kimlik" class="sınıf" nitelik="değer"></a>
```

Bu kadar yalın ve kolay!

- - - -
### Öntanımlı olarak div

div yaygın olarak kullanılan bir öge türü olduğu için belirtilmediği sürece div oluşturulur.

```JavaScript
'#kimlik'.init()
```
==

```HTML
<div id="kimlik"></div>
```
- - - -
### WEB Bileşenleri

Keyfi öge türleri oluşturmak için küçük harfler kullanabilirsiniz 

```JavaScript
'öge'.init()
```
==

```HTML
<öge></öge>
```

Ancak birden fazla sözcük ya da büyük harflerle yazarsanız bileşenleriniz yazdığınız sınıfları içeren bir div nesnesi olur.

```JavaScript
'öge bileşen'.init()
'Öge'.init()
```
==

```HTML
<div class="öge bileşen"></div>
<div class="Öge"></div>
```
### Dene
Yukarıda yazılanları [**CodePen**](https://codepen.io/otag/pen/wjOMoR?editors=0010) üzerinde dene

- - - -
### Daha Fazla Öğren

🌑[Otağ](https://otagjs.org)'da yalınlaştırmak için Tamga'dan daha fazlası var. Hemen [okumaya başla](https://github.com/ilgilenio/Otag/wiki)!
