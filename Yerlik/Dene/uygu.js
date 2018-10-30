import {O, Page} from 'otag'
import hljs from 'highlight.js'
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('xml', xml)
// hljs.registerLanguage('html', html)
let Uygu='Uygu'.kur({
  View: {
    yaz: 'textarea'.kur({
      keyup:'change',
      change() {
        console.log(this, 1)

        let Öge
        try{
          Öge = this.el.value.el
          Uygu.V('HTML').value = Öge.outerHTML.replace('&quot;','"')
          Uygu.V('önizle').el.pitch( Öge)
          hljs.highlightBlock(Uygu.V('HTML').el)

        } catch(e) {
          Uygu.V('HTML').el.Class('invalid')
        }
      }
    }),
    HTML: 'code .html.hljs',
    önizle: '.önizle'
  },
  template: `
    header
      a[href="../"]
        img:/tamga.svg
    #body
      yaz
      pre.sağ
        h2: Yorumlanan HTML
        HTML
        h2: Oluşturulan Öge
        önizle
  `
})
Uygu.to = 'body'
let Örnekler = [
  'img:/tamga.svg',
  'img://otagjs.org/img/otag.svg',
  'p:Yazı:İkinci Dize:Üçüncü Dize',
  'h1:Esenlikler',
  'address:Bu bir bulunak',
  'input:Açarsöz:password',
  'input:Sayı Girin:number',
  'input[name="email"]:İleti Bulunağınız',
  'b:Kalın Yazı',
  'a[href="https://otagjs.org"]:Otağ'
]
Uygu.V('yaz').value = Örnekler[ Math.round(Math.random()*1e5)%Örnekler.length ]


