/*
  AI-LA KULLANIM REHBERİ - İÇERİK DOSYASI
  ---------------------------------------
  Rehberi güncellemek için yalnızca bu dosyayı düzenleyin. Sayfa (index.html) bu
  veriden kendiliğinden oluşur.

  Blok türleri:
    { t: "p",      h: "Paragraf. <b>kalın</b> kullanılabilir." }
    { t: "img",    src: "img/dosya.jpg", cap: "Görsel altı yazısı" }
    { t: "steps",  items: ["1. adım", "2. adım"] }
    { t: "flow",   items: ["Adım", "Adım", "Adım"] }      (oklarla yan yana akış)
    { t: "tip",    h: "İpucu kutusu" }
    { t: "warn",   h: "Dikkat kutusu" }
    { t: "menu",   items: [["img/ikon/x.png", "Menü adı", "Ne işe yarar"]] }
    { t: "table",  head: ["A", "B"], rows: [["1", "2"]] }
    { t: "list",   items: ["madde", "madde"] }
    { t: "h3",     h: "Ara başlık" }
    { t: "video",  items: [["Başlık", "https://...", "Kısa açıklama"]] }
    { t: "check",  items: ["madde", "madde"] }             (işaretler tarayıcıda saklanır)

  Yeni bir ekran görüntüsü eklerken img/ klasörüne koyun. Öğrenci adı, e-posta,
  telefon ve kredi miktarı gibi bilgileri görüntüde bulanıklaştırın.
  Kredi miktarını metinde asla sabit bir sayı olarak yazmayın.
*/
window.REHBER = {
  meta: {
    baslik: "AI-LA Kullanım Rehberi",
    surum: "1.0.0",
    tarih: "29 Eylül 2026",
    kaynak: "Canlı AI-LA ekranları (Demo Okulları: okul yöneticisi, öğretmen ve öğrenci demo hesapları), AI-LA kurumsal sunumu (Eylül 2026) ve AI-LA öğrenci görevleri notları."
  },

  roller: [
    { id: "baslarken", ad: "Başlarken", renk: "var(--c-start)" },
    { id: "ogretmen", ad: "Öğretmen", renk: "var(--c-teacher)" },
    { id: "ogrenci", ad: "Öğrenci", renk: "var(--c-student)" },
    { id: "yonetici", ad: "Okul Yöneticisi", renk: "var(--c-admin)" },
    { id: "gorev", ad: "Görev Akışı", renk: "var(--c-level)" },
    { id: "sss", ad: "SSS ve Kaynaklar", renk: "var(--c-faq)" }
  ],

  bolumler: [
    /* ============================ BAŞLARKEN ============================ */
    {
      id: "aila-nedir", rol: "baslarken", baslik: "AI-LA nedir?",
      ozet: "Okulunuzun kendi markasıyla çalışan yapay zekâ altyapısı. Tek adres, üç hesap türü.",
      bloklar: [
        { t: "p", h: "AI-LA, kurumunuzun eğitim süreçlerini yapay zekâ ile güçlendirmek için tasarlanmış akıllı eğitim altyapısıdır. Öğretmen ders planı, sınav, etkinlik ve veli raporu gibi içerikleri dakikalar içinde hazırlar; öğrenci kendi düzeyine uygun yapay zekâ araçlarıyla çalışır ve haftalık görevlerini teslim eder; okul yöneticisi tüm kurumun kullanımını tek panelden izler." },
        { t: "p", h: "AI-LA okulunuzun <b>kendi logosu ve renkleriyle</b> açılır. Giriş ekranının altında \"AI-LA altyapısı ile geliştirilmiştir\" yazar. Bu rehberdeki ekranlar <b>Demo Okulları</b> hesabından alındı; sizin ekranınızda okulunuzun adı, logosu ve renkleri görünür, menüler aynıdır." },
        { t: "table", head: ["Hesap", "Kim kullanır?", "Temel işi"], rows: [
          ["<span class='pill p-teacher'>Öğretmen</span>", "Sınıf ve branş öğretmenleri", "AI araçlarıyla ders materyali üretir, öğrencilere görev atar, TYMM görevlerini inceler ve onaylar."],
          ["<span class='pill p-student'>Öğrenci</span>", "Öğrencileriniz", "Öğrenme araçlarını kullanır, öğretmen görevlerini ve haftalık TYMM görevlerini yapar, teslim eder."],
          ["<span class='pill p-admin'>Okul Yöneticisi</span>", "Müdür, müdür yardımcısı, koordinatör", "Sınıfları ve kullanıcıları yönetir, kuruma özel araç kurar, kurumsal raporları okur."]
        ]},
        { t: "tip", h: "Bu rehberdeki tüm ekran görüntüleri canlı sistemden alınmıştır. Kişi adları, e-postalar ve kredi bilgisi gizlilik için bulanıklaştırılmıştır." }
      ]
    },
    {
      id: "giris", rol: "baslarken", baslik: "Giriş ve ilk gün",
      ozet: "Hesabınızı okulunuz açar. Siz yalnızca size iletilen bilgilerle girersiniz.",
      bloklar: [
        { t: "img", src: "img/b_00_giris.jpg", cap: "Giriş ekranı: okulun logosu, \"Hoş Geldiniz\" formu ve altta \"AI-LA altyapısı ile geliştirilmiştir\"" },
        { t: "steps", items: [
          "Okulunuzun size ilettiği AI-LA adresini tarayıcıda açın (Chrome önerilir). AI-LA en rahat bilgisayardan kullanılır.",
          "<b>E-posta veya TC Kimlik No</b> ve <b>Şifre</b> alanlarını doldurup <b>Giriş Yap</b>'a basın.",
          "İlk girişte dört sayfalık bir <b>tanıtım penceresi</b> açılır. <b>Devam</b> ile ilerleyin ya da sağ üstteki <b>×</b> ile kapatın.",
          "Açılan ilk ekran <b>Ana Sayfa</b>'dır. Sol taraftaki menüden tüm bölümlere geçersiniz.",
          "Sol alttaki adınızın baş harflerine tıklayın, <b>Profil Ayarları › Parolayı Değiştir</b> ile şifrenizi yenileyin."
        ]},
        { t: "h3", h: "Tanıtım penceresi" },
        { t: "img", src: "img/b_01_hosgeldin.jpg", cap: "1/4 \"Kurumunuzun Yapay Zeka Vizyonu\"" },
        { t: "img", src: "img/b_02_hosgeldin.jpg", cap: "2/4 \"Kurumunuzun Yapay Zeka Asistanı Her An Yanınızda\": AI-LA Chat ve Güvenlik Duvarı" },
        { t: "list", items: [
          "<b>1. Yapay zekâ vizyonu:</b> dakikalar içinde ders planı, saniyeler içinde sınav kâğıdı.",
          "<b>2. AI-LA Chat:</b> metin, görsel ve sesli etkileşim. Uygunsuz bir istek geldiğinde <b>Güvenlik Duvarı</b> devreye girer: \"Bu içerik güvenlik kontrolünden geçemedi. Öğrencilerin güvenliği bizim önceliğimiz!\"",
          "<b>3. Tek noktadan erişim:</b> KÖPRÜ ile okulun kullandığı diğer eğitim platformları.",
          "<b>4. Kuruma özel araçlar:</b> ürettiğiniz her şey <b>Koleksiyon</b>'da saklanır."
        ]},
        { t: "warn", h: "Hesaplar okul adına açılır. Şifrenizi unutursanız ya da giriş yapamıyorsanız okul yöneticinize başvurun." }
      ]
    },
    {
      id: "ortak-ekran", rol: "baslarken", baslik: "Ekranın ortak parçaları",
      ozet: "Üç hesapta da aynı yerde duran bölümler.",
      bloklar: [
        { t: "img", src: "img/ogr_02_menu.jpg", cap: "Menü açık hâli: AI Araçları altında Genel Araçlar, Kuruma Özel Araçlar ve Koleksiyon" },
        { t: "list", items: [
          "<b>Sol menü:</b> Kapalıyken yalnızca ikonlar görünür. En üstteki <b>☰ (Menüyü Aç)</b> menü adlarını gösterir, <b>‹</b> tekrar daraltır. Menüler hesap türüne göre değişir.",
          "<b>AI Araçları</b> menüsü açılır bir başlıktır: <b>Genel Araçlar</b>, <b>Kuruma Özel Araçlar</b>, <b>Koleksiyon</b>.",
          "<b>Üst şerit:</b> Ana sayfadaki renkli karşılama şeridinde sık kullanılan kısayollar vardır (öğretmende Sınıflarım, Whiteboard, Yönetici Mesajı).",
          "<b>Hemen Sohbete Başla › Sohbete Geç:</b> AI-LA ile sohbet eder, içerik üretirsiniz. Sohbet ekranı <b>AI Stüdyo</b>'dur.",
          "<b>Sol alt, profil:</b> <b>Profil Ayarları</b> (e-posta, rol, kredi, parola), <b>Size Özel</b> ve <b>Çıkış Yap</b>."
        ]},
        { t: "img", src: "img/ogr_22_profil_menu.jpg", cap: "Sol alttaki profil menüsü: Profil Ayarları, Size Özel, Çıkış Yap" },
        { t: "tip", h: "Araç kartlarındaki <b>☆</b> ile aracı favorilerinize eklersiniz. Kartın sağ altındaki <b>+</b> aracı hemen açar." }
      ]
    },
    {
      id: "rol-karsilastirma", rol: "baslarken", baslik: "Kim neyi görür? (özet tablo)",
      ozet: "Üç hesabın menüleri ve yetkileri yan yana.",
      bloklar: [
        { t: "table", head: ["Bölüm / İş", "Öğretmen", "Öğrenci", "Okul Yöneticisi"], rows: [
          ["Genel Araçlar", "✔ Akıllı Öğretmen Araçları", "✔ Akıllı Öğrenme Araçları", "✔ öğretmen araçları"],
          ["Kuruma Özel Araçlar", "✔ kullanır", "✔ öğrenciye açılanları kullanır", "✔ oluşturur, düzenler, yayınlar"],
          ["Koleksiyon", "✔", "✔", "✔"],
          ["AI Stüdyo (sohbet, görsel, ses, video)", "✔", "✔", "✔"],
          ["AI Ajanları (BETA)", "✔", "-", "✔"],
          ["Topluluk", "✔", "✔", "-"],
          ["Sınıf açma, öğrenci / öğretmen yerleştirme", "-", "-", "✔ Sınıf Yönetimi"],
          ["Kendi sınıflarını ve öğrencilerini görme", "✔ Sınıf Yönetimi", "-", "✔ tüm okul"],
          ["Öğrencilere görev atama", "✔ Koleksiyon › Öğrencilere ata", "-", "-"],
          ["Görev yapma ve teslim", "-", "✔ Görevlerim", "-"],
          ["TYMM görevlerini inceleme, onaylama", "✔ Sınıf Yönetimi › TYMM Görevleri", "Öğretmene Gönder", "-"],
          ["Kullanıcı yönetimi", "-", "-", "✔ Kullanıcı Yönetimi"],
          ["Kurumsal raporlar", "-", "-", "✔ Ana Sayfa › Kurumsal Analitik"],
          ["KÖPRÜ (diğer platformlar)", "✔", "✔", "✔"],
          ["Whiteboard", "✔", "-", "-"]
        ]},
        { t: "tip", h: "Öğretmen yalnızca <b>kendine atanmış sınıfları</b> görür. Bir sınıfınız ya da öğrenciniz görünmüyorsa okul yöneticinizden sizi o sınıfa atamasını isteyin." }
      ]
    },

    /* ============================ ÖĞRETMEN ============================ */
    {
      id: "ogretmen-menu", rol: "ogretmen", baslik: "Öğretmen menüsü",
      ozet: "Sol taraftaki ikonların her biri ne işe yarar?",
      bloklar: [
        { t: "menu", items: [
          ["img/ikon/ogr_0.png", "Menüyü Aç", "Menü adlarını gösterir."],
          ["img/ikon/ogr_1.png", "AI Araçları", "Genel Araçlar, Kuruma Özel Araçlar ve Koleksiyon."],
          ["img/ikon/ogr_2.png", "AI Ajanları (BETA)", "İş akışlarını uçtan uca otomatikleştirecek ajanlar."],
          ["img/ikon/ogr_3.png", "AI Stüdyo", "Sohbet; metin, görsel, ses ve video üretimi."],
          ["img/ikon/ogr_4.png", "Topluluk", "Herkese açık paylaşılan üretimler."],
          ["img/ikon/ogr_5.png", "Sınıf Yönetimi", "Sınıflarınız, öğrencileriniz, verilen ödevler, TYMM görevleri."],
          ["img/ikon/ogr_6.png", "KÖPRÜ", "Okulun kullandığı diğer eğitim platformlarına tek hesapla geçiş."],
          ["img/ikon/ogr_7.png", "Profil", "Profil Ayarları, Size Özel, Çıkış Yap."]
        ]},
        { t: "tip", h: "Menü ikonlarında yazı yoktur. İlk günlerde <b>☰</b> ile menüyü açık tutun; adlar yanında görünür." }
      ]
    },
    {
      id: "ogretmen-ana-sayfa", rol: "ogretmen", baslik: "Ana Sayfa",
      ozet: "Girişte açılan ekran: kısayollar, sohbet ve önerilen araçlar.",
      bloklar: [
        { t: "img", src: "img/ogr_01_ana_sayfa.jpg", cap: "Öğretmen ana sayfası: karşılama şeridi, Hemen Sohbete Başla, Öğretmenimizi Tanıyalım, Önerilen Araçlar" },
        { t: "list", items: [
          "<b>Sınıflarım:</b> Sınıf Yönetimi ekranına götürür.",
          "<b>Whiteboard:</b> tam ekran dijital tahta (aşağıda ayrıca anlatılıyor).",
          "<b>Yönetici Mesajı:</b> okul yöneticinizin size bıraktığı video mesajı açar.",
          "<b>Hemen Sohbete Başla › Sohbete Geç:</b> AI Stüdyo'da AI-LA ile sohbet.",
          "<b>Öğretmenimizi Tanıyalım › Formu Doldur:</b> beş adımlı kısa bir tanışma formu (Mesleki Profil, Öğretim Stili, Bağlılık, İletişim, Hedefler). Size özel içerik önerileri için kullanılır.",
          "<b>Önerilen Araçlar:</b> en sık kullanılan araçlar. Tümü için <b>Daha Fazla Gör</b>."
        ]},
        { t: "img", src: "img/ogr_21_tanis.jpg", cap: "Öğretmenimizi Tanıyalım: \"Sizi Daha Yakından Tanıyalım\" formu, 1/5 Mesleki Profil" }
      ]
    },
    {
      id: "genel-araclar", rol: "ogretmen", baslik: "Genel Araçlar: Akıllı Öğretmen Araçları",
      ozet: "Ders planından sınava, veli raporundan simülasyona kadar hazır yapay zekâ araçları.",
      bloklar: [
        { t: "img", src: "img/ogr_03_genel_araclar.jpg", cap: "Akıllı Öğretmen Araçları: kategori sekmeleri ve araç kartları" },
        { t: "p", h: "Üstteki sekmeler araçları kategoriye göre süzer: <b>Tümü</b>, <b>Öğretim Tasarımı</b>, <b>Sınıf İçi Etkileşim</b>, <b>Öğrenme Pekiştirme</b>, <b>Kişiselleştirilmiş Öğrenme</b>, <b>Ölçme & Geri Bildirim</b>. Sağdaki liste ile <b>En Çok Kullanılanlar</b> ya da <b>En Yeniler</b> sıralanır." },
        { t: "table", head: ["Araç", "Kategori", "Ne yapar?"], rows: [
          ["Ders Planı Oluştur", "Öğretim Tasarımı", "Dakikalar içinde kapsamlı ders planı."],
          ["Karışık Sınav Oluştur", "Ölçme & Geri Bildirim", "Farklı soru türlerinde sınav. Öğrencilere atanabilir."],
          ["Temel Kabuller Soru Seti", "Öğretim Tasarımı", "Ders öncesi hazırbulunuşluğu yoklar."],
          ["Hikaye-Drama Oluştur", "Sınıf İçi Etkileşim", "Konuyu hikâyeleştirir."],
          ["Veli Toplantısı Raporu", "Ölçme & Geri Bildirim", "Analiz dosyanızdan öğrenci için ayrıntılı rapor."],
          ["Performans Gelişim Özeti", "Ölçme & Geri Bildirim", "Öğrenci verilerini eyleme dönüştürülebilir içgörülere çevirir."],
          ["Yaşantı Temelli Öğrenme", "Öğretim Tasarımı", "Gerçek yaşamdan örneklerle konu anlatımı."],
          ["Etkinlik Oluştur", "Sınıf İçi Etkileşim", "Konuyu etkinlikle keşfettirir."],
          ["Proje Ödevi Oluştur", "Öğrenme Pekiştirme", "Kazanıma uygun, öğrenciye özel proje ödevi."],
          ["Öğrenme Kanıtları Üret", "Öğrenme Pekiştirme", "Öğrenmeyi gösteren kanıt ve değerlendirme örnekleri."],
          ["Simülasyon Aracı <span class='pill p-admin'>Premium</span>", "Öğretim Tasarımı", "Yapay zekâ tabanlı simülasyonlar."],
          ["Sınav Okuyucu", "Ölçme & Geri Bildirim", "Sınav kâğıtlarını yapay zekâ desteğiyle okutur."],
          ["Bilişim Ders Planı Oluştur", "Öğretim Tasarımı", "Ulusal ve uluslararası standartlarda bilişim ders planı."]
        ]},
        { t: "p", h: "Kartlarda <b>Standart</b> ya da <b>Premium</b> etiketi yazar. Son kart \"<b>Daha Fazlası Yolda</b>\": yeni araçlar eklendikçe listede görünür." },
        { t: "h3", h: "Bir aracı kullanmak: Ders Planı Oluştur" },
        { t: "img", src: "img/ogr_04_ders_plani.jpg", cap: "Günlük Ders Planı Oluşturucu: Müfredat Bilgileri, Öğrenme Yöntemleri, Ek Bilgiler" },
        { t: "steps", items: [
          "<b>Müfredat Bilgileri:</b> Sınıf Seviyesi (1-12. sınıf, Maarif programındaki sınıflar \"(Maarif)\" etiketiyle; ayrıca TYT ve AYT) ve Ders seçin.",
          "<b>Öğrenme Yöntemleri:</b> Anlatım, Tartışma, Örnek Olay, Soru-Cevap, Beyin Fırtınası, Gösterip Yaptırma, Bireysel Çalışma, Grup Çalışması arasından seçin.",
          "<b>Ek Bilgiler (isteğe bağlı):</b> Farklılaştırma, Teknoloji Entegrasyonu ve Yapay Zeka Asistanı Entegrasyonu alanlarına sınıfınıza özel notunuzu yazın.",
          "<b>Planı Oluştur</b>'a basın. Sonuç <b>Koleksiyon</b>'a kaydedilir; oradan düzenler, PDF olarak indirirsiniz."
        ]},
        { t: "tip", h: "Ek Bilgiler'i boş bırakmayın. \"Sınıfta iki kaynaştırma öğrencim var\" ya da \"akıllı tahta kullanacağım\" gibi tek bir cümle bile planı belirgin biçimde sınıfınıza uyarlar." },
        { t: "warn", h: "Yapay zekâ çıktıları hata yapabilir. Derste kullanmadan önce içeriği okuyun ve gerekirse <b>Düzenle</b> ile düzeltin. Araç sayfalarının sağ üstündeki <b>Kullanım Şartları</b>'nı bir kez okuyun." }
      ]
    },
    {
      id: "kurum-araclari-ogr", rol: "ogretmen", baslik: "Kuruma Özel Araçlar",
      ozet: "Okulunuz için kurulmuş araçlar.",
      bloklar: [
        { t: "img", src: "img/ogr_05_kurum_araclari.jpg", cap: "Kurum Araçları: okulunuza özel araçlar ve kimlerin kullanabildiği" },
        { t: "p", h: "Bu araçları okul yöneticiniz kurar ve yayınlar. Demo okulda örneğin <b>Uzay Temalı Eğitimsel Oyun Oluştur</b>, <b>Poster Oluştur</b>, <b>Pacman Eğitimsel Oyun Oluştur</b>, <b>Kodlama Oyunu Oluştur</b> ve <b>Scratch Oyunu Üret</b> vardır. Her kartta aracın çıktı türü (Metin / Görsel) ve kimlerin kullanabildiği (Öğretmen / Öğrenci) yazar." },
        { t: "tip", h: "Okulunuzda sık tekrarlanan bir iş varsa (ör. zümrenin ortak etkinlik formatı) okul yöneticinize önerin: bir kez kurulan araç tüm zümreye açılır." }
      ]
    },
    {
      id: "koleksiyon", rol: "ogretmen", baslik: "Koleksiyon: ürettiğiniz her şey",
      ozet: "Araçlarla ürettiğiniz tüm içerikler, klasörler ve paylaşımlar.",
      bloklar: [
        { t: "img", src: "img/ogr_06_koleksiyon.jpg", cap: "Koleksiyon: filtreler, klasörler ve üretim kartları" },
        { t: "list", items: [
          "<b>Yapay Zeka Araçlarına Göre Filtrele</b> ve <b>Öğrenme Çıktılarına Göre Filtrele</b> ile ararsınız.",
          "<b>Yeni Üretim</b> araç listesine götürür; <b>Yeni Klasör</b> ile içerikleri ders ya da sınıfa göre gruplarsınız.",
          "Sekmeler: <b>Tümü</b>, <b>Benimle Paylaşılanlar</b>, <b>Benim Paylaştıklarım</b> ve klasörleriniz.",
          "Her kartta içerik adı, üreten araç, sınıf düzeyi ve tarih yazar. <b>Atanabilir</b> etiketi olanlar öğrencilere görev olarak verilebilir (ör. Karışık Sınav Oluştur, Sınav Okuyucu çıktıları)."
        ]},
        { t: "img", src: "img/ogr_07_koleksiyon_detay.jpg", cap: "İçerik detayı: Öğrencilere ata, Paylaş, Sil, Düzenle, PDF Kaydet, Cevapları Göster" },
        { t: "p", h: "Kartta <b>İncele</b> içeriği açar. Üstteki düğmeler: <b>Öğrencilere ata</b> (görev olarak verir), <b>Paylaş</b>, kırmızı çöp kutusu (sil), <b>Düzenle</b>, <b>PDF Kaydet</b>. Sınavlarda <b>Cevapları Göster</b> doğru cevapları açar; soru sayısı ve süre üstte yazar." },
        { t: "tip", h: "Sınavı sınıfta kâğıt üzerinde yapacaksanız <b>PDF Kaydet</b> ile indirin; dijital yapacaksanız <b>Öğrencilere ata</b>'yı kullanın. Adımlar için <b>Görev Akışı</b> sekmesine bakın." }
      ]
    },
    {
      id: "ai-studyo", rol: "ogretmen", baslik: "AI Stüdyo: sohbet ve üretim",
      ozet: "Metin, görsel, ses ve video üretin; topluluğun üretimlerini keşfedin.",
      bloklar: [
        { t: "img", src: "img/ogr_09_ai_studyo.jpg", cap: "AI Stüdyo: \"Ne üretmek istiyorsun?\" Metin, Görsel, Ses, Video. Altta Keşfet" },
        { t: "steps", items: [
          "Sol menüden <b>AI Stüdyo</b>'ya ya da ana sayfadan <b>Sohbete Geç</b>'e basın.",
          "Üretim türünü seçin: <b>Metin</b>, <b>Görsel</b>, <b>Ses</b> veya <b>Video</b>.",
          "\"Bir şeyler yaz...\" kutusuna isteğinizi yazın. Altındaki düğmeden modeli seçebilirsiniz.",
          "Gönderin. Sonuç ekranda açılır ve Stüdyo'nun <b>Koleksiyon</b> sekmesine kaydedilir."
        ]},
        { t: "p", h: "Aşağıdaki <b>Keşfet</b> alanında okulunuzda paylaşılan üretimler görünür; <b>Beğenilenler</b>, <b>Filtreler</b> ve arama kutusuyla süzersiniz. Keşfet ızgarası ilk açılışta birkaç saniye \"Keşfet Hazırlanıyor\" yazabilir." },
        { t: "img", src: "img/ogr_10_studyo_koleksiyon.jpg", cap: "Stüdyo Koleksiyonu: Hepsi, Görseller, Videolar, Sesler, Müzikler; Keşfette / Keşfette değil" },
        { t: "p", h: "Stüdyo'nun sol üstündeki <b>Koleksiyon</b>, Stüdyo'da ürettiğiniz görsel, video, ses ve müzikleri tutar. Bir üretimi <b>Keşfette</b> yaparsanız okulunuzdaki diğer kullanıcılar da görür." },
        { t: "warn", h: "Ekranda şu uyarı yazar: \"AI-LA AI modelleri hata yapabilir. Bilgileri kontrol etmeyi unutma.\" Her üretim kredi harcar; kredi miktarı kuruma göre değişir ve Profil Ayarları'nda görünür." }
      ]
    },
    {
      id: "siniflar-ogr", rol: "ogretmen", baslik: "Sınıf Yönetimi: sınıflarım ve öğrencilerim",
      ozet: "Size atanmış sınıflar, öğrenci listesi, verilen ödevler ve TYMM görevleri.",
      bloklar: [
        { t: "img", src: "img/ogr_13_siniflar.jpg", cap: "Sınıf Yönetimi: Sınıflarım, Tüm Öğrencilerim, TYMM Görevleri sekmeleri" },
        { t: "table", head: ["Sekme", "Ne gösterir?"], rows: [
          ["Sınıflarım", "Size atanmış her sınıf bir kart: sınıf, şube, öğretmen sayısı, oluşturulma tarihi. <b>Sınıfı Görüntüle</b> sınıfı açar."],
          ["Tüm Öğrencilerim", "Tüm sınıflarınızdaki öğrenciler tek listede: ad soyad, sınıf, e-posta, telefon. Arama kutusu ve sınıf filtresi vardır."],
          ["TYMM Görevleri", "Öğrencilerin size gönderdiği ve incelemenizi bekleyen haftalık görevler. Sınıf filtresi ve \"incelenecek\" sayacı vardır."]
        ]},
        { t: "img", src: "img/ogr_14_sinif_detay.jpg", cap: "Açılmış sınıf: toplam öğrenci, sınıf seviyesi, şube ve öğrenci listesi" },
        { t: "p", h: "Sınıf açıkken iki sekme görürsünüz: <b>Öğrenciler</b> ve <b>Verilen ödevler</b>. Öğrenci satırının sağındaki <b>⋮</b> öğrenciyle ilgili işlemleri açar." },
        { t: "img", src: "img/ogr_15_verilen_odevler.jpg", cap: "Verilen ödevler: içerik, öğrenci, durum, tarih; Kaldır" },
        { t: "p", h: "<b>Verilen ödevler</b>, bu sınıfa atadığınız her görevi öğrenci öğrenci listeler: hangi içerik, hangi öğrenci, durumu (başlamadı, başladı, bitirdi, geç bitirdi) ve tarih. Yanlış atadığınız bir görevi <b>Kaldır</b> ile geri alırsınız." },
        { t: "img", src: "img/ogr_17_tymm.jpg", cap: "TYMM Görevleri: öğrencilerin size gönderdiği görevler burada birikir" },
        { t: "warn", h: "Sınıf açma, öğrenci ekleme ve çıkarma işlerini öğretmen yapamaz, <b>okul yöneticisi</b> yapar. Listede olmayan bir öğrenci için okul yöneticinize yazın." }
      ]
    },
    {
      id: "ajanlar-topluluk", rol: "ogretmen", baslik: "AI Ajanları ve Topluluk",
      ozet: "Yakında gelecek otomasyonlar ve herkese açık paylaşımlar.",
      bloklar: [
        { t: "img", src: "img/ogr_11_ajanlar.jpg", cap: "AI Ajanları (BETA): \"Tek tıkla başlatın, gerisini ajanlara bırakın.\"" },
        { t: "p", h: "AI Ajanları, sınav üretiminden veli iletişimine kadar iş akışlarını uçtan uca otomatikleştirecek AI-LA ajanlarıdır. Bölüm <b>BETA</b>'dır; kartların hepsi şu an <b>YAKINDA</b> etiketlidir." },
        { t: "table", head: ["Ajan", "Ne yapacak?"], rows: [
          ["Deneme Analiz Ajanı · Bildirim Ajanı", "Sınıfın ya da öğrencinin son deneme sınavını analiz eder, veliye ve okul yöneticisine bildirim gönderir."],
          ["Öğretmen Asistanı · Master Agent", "Son denemeyi analiz eder, eksik kazanımlara göre sınav + sunum üretir, özet rapor sunar."],
          ["Ders Koçu Ajanı", "Öğrencinin gelişimini izler, kişiye özel çalışma planı önerir."],
          ["Veli İletişim Ajanı", "Veli görüşme notlarını ve bilgilendirme mesajlarını hazırlar."],
          ["Ölçme Değerlendirme Ajanı", "Kazanım bazlı analiz ve geri bildirim."],
          ["Riskli Öğrenci Ajanı", "Akademik ve davranışsal riskleri erken tespit eder."],
          ["İçerik Üretim, Müfredat Planlama, Geri Bildirim, Raporlama ajanları", "Ders planı ve etkinlik üretimi, yıllık/ünite planı, ödev dönütü, özet performans raporları."]
        ]},
        { t: "img", src: "img/ogr_12_topluluk.jpg", cap: "Topluluk: herkese açık olarak paylaşılan üretimler" },
        { t: "p", h: "<b>Topluluk</b>, Koleksiyon'dan <b>Paylaş</b> ile herkese açtığınız üretimlerin göründüğü yerdir. Araç türüne göre filtrelenir; kartta <b>İncele</b> ile açılır. Meslektaşlarınızın ürettiklerini buradan görebilirsiniz." }
      ]
    },
    {
      id: "kopru-whiteboard", rol: "ogretmen", baslik: "KÖPRÜ, Whiteboard ve Profil",
      ozet: "Diğer platformlara geçiş, dijital tahta ve hesap bilgileri.",
      bloklar: [
        { t: "img", src: "img/ogr_18_kopru.jpg", cap: "KÖPRÜ: \"Tüm Platformlara Tek Noktadan Erişin\"" },
        { t: "p", h: "<b>KÖPRÜ</b>, okulunuzun kullandığı diğer eğitim platformlarını (Talent14, Derslig, Denemeol, Hızlı Okuyo, Lidyanka) AI-LA hesabınızla açar. Kartta <b>Hemen Keşfet</b> platforma geçirir; <b>Raporu Görüntüle</b> o platformdaki rapora götürür. Hangi platformların açık olduğu okulunuzun aboneliğine bağlıdır." },
        { t: "img", src: "img/ogr_19_whiteboard.jpg", cap: "Whiteboard: üstte çizim araçları, sağ altta Temizle, Kaydet, Yükle, PNG" },
        { t: "p", h: "<b>Whiteboard</b> ana sayfadaki kısayoldan açılan tam ekran bir tahtadır. Üstte seçim, dikdörtgen, elmas, daire, ok, çizgi, kalem, metin, görsel ve silgi araçları vardır. Sağ alttan tahtayı <b>Kaydet</b>, daha sonra <b>Yükle</b> ya da <b>PNG</b> olarak indir. <b>Ana Sayfa</b> düğmesi sizi geri götürür." },
        { t: "img", src: "img/ogr_23_profil.jpg", cap: "Profil Ayarları: e-posta, kullanıcı rolü, mevcut kredi, Parolayı Değiştir" },
        { t: "p", h: "Sol alttaki baş harflerinize tıklayıp <b>Profil Ayarları</b>'nı açın: e-posta adresiniz, rolünüz ve <b>mevcut krediniz</b> burada yazar. <b>Parolayı Değiştir</b> ile şifrenizi yenilersiniz." }
      ]
    },

    /* ============================ ÖĞRENCİ ============================ */
    {
      id: "ogrenci-menu", rol: "ogrenci", baslik: "Öğrenci menüsü",
      ozet: "Öğrencinin menüsü öğretmeninkinden kısadır.",
      bloklar: [
        { t: "menu", items: [
          ["img/ikon/stu_1.png", "AI Araçları", "Akıllı Öğrenme Araçları, Kuruma Özel Araçlar, Koleksiyon."],
          ["img/ikon/stu_2.png", "AI Stüdyo", "Sohbet; metin, görsel, ses ve video üretimi."],
          ["img/ikon/stu_3.png", "Topluluk", "Herkese açık paylaşılan üretimler."],
          ["img/ikon/stu_4.png", "Görevlerim", "Öğretmen görevleri ve haftalık TYMM görevleri."],
          ["img/ikon/stu_5.png", "KÖPRÜ", "Okulun diğer eğitim platformları."],
          ["img/ikon/stu_6.png", "Profil", "Profil Ayarları, Çıkış Yap."]
        ]},
        { t: "warn", h: "Öğrencide <b>AI Ajanları</b> ve <b>Sınıf Yönetimi</b> yoktur. Görevler yalnızca <b>Görevlerim</b>'dedir; öğrencilere bu yolu ilk derste gösterin." }
      ]
    },
    {
      id: "ogrenci-ana-sayfa", rol: "ogrenci", baslik: "Öğrenci ana sayfası",
      ozet: "\"Yapay Zeka ile öğrenmeye hazır ol\"",
      bloklar: [
        { t: "img", src: "img/stu_01_ana_sayfa.jpg", cap: "Öğrenci ana sayfası: AI Araçları, Görevlerim, Yönetici Mesajı; sohbet ve Sizi Dinliyoruz" },
        { t: "list", items: [
          "Üst şeritte <b>AI Araçları</b>, <b>Görevlerim</b> ve <b>Yönetici Mesajı</b> kısayolları vardır.",
          "<b>Hemen Sohbete Başla:</b> AI Stüdyo'da AI-LA ile sohbet.",
          "<b>Sizi Dinliyoruz:</b> öğrenci görmek istediği yeni bir aracı yazar, <b>Araç Öner</b> ile gönderir.",
          "Aşağıda <b>AI Araçları</b>, <b>Aktif Görevlerim</b>, <b>Hızlı Erişim</b> ve <b>Bu Hafta</b> özet kartları bulunur."
        ]},
        { t: "img", src: "img/stu_02_ana_alt.jpg", cap: "Ana sayfanın alt kısmı: Aktif Görevlerim, Hızlı Erişim, Bu Hafta" }
      ]
    },
    {
      id: "ogrenci-araclar", rol: "ogrenci", baslik: "Akıllı Öğrenme Araçları",
      ozet: "Öğrencinin araçları öğretmeninkinden farklıdır: konuyu anlamaya ve çalışmaya yöneliktir.",
      bloklar: [
        { t: "img", src: "img/stu_03_araclar.jpg", cap: "Akıllı Öğrenme Araçları: \"Daha akıllı çalış. Daha hızlı ilerle.\"" },
        { t: "table", head: ["Araç", "Ne yapar?"], rows: [
          ["Deneyle Öğren", "Konuyu evde yapılabilecek basit bir deneyle keşfettirir."],
          ["Şehirle Anlat", "Konuyu seçilen şehrin gözünden anlatır."],
          ["Rutinimle Eşleştir", "Öğrenilen konuyu günlük rutine bağlar."],
          ["Soru Çözücü", "Zor bir sorunun çözüm yolunu adım adım gösterir."],
          ["Gelecekten Mektup Al", "Gelecekteki kendinden motivasyon mektubu."],
          ["Bugünkü Çalışma Pusulam", "Günlük çalışma rotası oluşturur."],
          ["Hobilerle Bağla", "İlgi alanlarını derslerle birleştirir."],
          ["Konu Anlamadım Modu", "Anlaşılmayan konuyu günlük bir nesneyle adım adım açıklar."]
        ]},
        { t: "img", src: "img/stu_04_soru_cozucu.jpg", cap: "Soru Çözücü: sınıf, ders, durum; soruyu görsel olarak yükle ya da yaz" },
        { t: "p", h: "Örnek: <b>Soru Çözücü</b>'de öğrenci sınıfını ve dersini seçer, <b>Durum</b> alanında soru ders içinde mi ödevde mi (Ders İçi / Ödev) belirtir, soruyu <b>Görsel Yükle</b> ile fotoğraf olarak (JPG, PNG, WEBP) ya da <b>Soruyu Yaz</b> ile metin olarak verir ve <b>Çözümü Başlat</b>'a basar." },
        { t: "img", src: "img/stu_05_kurum_araclari.jpg", cap: "Kuruma Özel Araçlar: öğrenciye açılan okul araçları" },
        { t: "p", h: "<b>Kuruma Özel Araçlar</b>'da yalnızca okul yöneticisinin öğrenciye açtığı araçlar görünür (ör. Poster Oluştur, Scratch Oyunu Üret). Ürettikleri her şey öğrencinin <b>Koleksiyon</b>'una kaydedilir; <b>Benimle Paylaşılanlar</b> sekmesinde öğretmenlerin paylaştıkları durur." },
        { t: "img", src: "img/stu_06_koleksiyon.jpg", cap: "Öğrenci Koleksiyonu: üretimler, klasörler ve paylaşılanlar" }
      ]
    },
    {
      id: "ogrenci-gorevler", rol: "ogrenci", baslik: "Görevlerim",
      ozet: "Öğretmenin atadıkları ve haftalık TYMM görevleri burada.",
      bloklar: [
        { t: "img", src: "img/stu_09_gorevlerim.jpg", cap: "Görevlerim › Öğretmen Görevleri: durum filtreleri ve görev kartları" },
        { t: "p", h: "Üstte iki düğme vardır: <b>Öğretmen Görevleri</b> ve <b>TYMM Görevleri</b>." },
        { t: "h3", h: "Öğretmen Görevleri" },
        { t: "list", items: [
          "Filtreler: <b>Tümü</b>, <b>Başlamadı</b>, <b>Devam ediyor</b>, <b>Tamamlandı</b>. Liste güncel değilse <b>Yenile</b>.",
          "Kartta görevin adı, süresi, veren öğretmen ve tamamlandıysa puan yazar. Etiketler: Başlamadı, Devam ediyor, Tamamlandı, <b>Gecikmeli Tamamlandı</b>.",
          "<b>Başla</b> görevi açar, <b>Devam Et</b> yarım kalanı sürdürür."
        ]},
        { t: "img", src: "img/stu_10_odev_sayfasi.jpg", cap: "Görev sayfası: içerik \"Ödeve Başla\"ya basınca açılır" },
        { t: "steps", items: [
          "Görev sayfasında süre ve durum üstte yazar. İçerik gizlidir: <b>Ödeve Başla</b>'ya basınca sorular açılır ve süre başlar.",
          "Öğrenci soruları cevaplar (çoktan seçmeli, boşluk doldurma, doğru/yanlış, açık uçlu).",
          "Sayfanın sonundaki <b>Cevapları Gönder</b> ile teslim eder. Görev <b>Tamamlandı</b> olur, puan kartta görünür."
        ]},
        { t: "warn", h: "<b>Ödeve Başla</b>'ya basmadan önce öğrencinin hazır olduğundan emin olun: süre bu düğmeyle başlar." },
        { t: "h3", h: "TYMM Görevleri" },
        { t: "img", src: "img/stu_11_tymm.jpg", cap: "TYMM Görevleri: haftalık görev kartı, hafta numarası ve son teslim tarihi" },
        { t: "p", h: "TYMM görevleri Türkiye Yüzyılı Maarif Modeli ile ilişkili, haftalık hazır görevlerdir. Filtreler: <b>Tümü</b>, <b>Yapılacak</b>, <b>Devam Ediyor</b>, <b>Değerlendiriliyor</b>, <b>Öğretmende</b>, <b>Tamamlandı</b>. Kartta hafta numarası ve <b>son teslim</b> tarihi yazar; <b>Görüntüle</b> görevi açar." },
        { t: "img", src: "img/stu_12_tymm_gorev.jpg", cap: "TYMM görev sayfası: Talimatlar" },
        { t: "img", src: "img/stu_13_tymm_kriterler.jpg", cap: "Kriterler (Zorunlu olanlar işaretli) ve Geçmiş Gönderimler" },
        { t: "p", h: "Görev sayfası yukarıdan aşağı şöyle okunur: <b>Talimatlar</b> (ne yapılacak, neler yüklenecek, neden böyle, büyüğü için not), <b>Kriterler</b> (teslimin karşılaması gerekenler; <b>Zorunlu</b> etiketli olanlar şart), gönderim alanı ve <b>Geçmiş Gönderimler</b>. Teslim ve değerlendirme adımları <b>Görev Akışı</b> sekmesinde." }
      ]
    },
    {
      id: "ogrenci-studyo", rol: "ogrenci", baslik: "AI Stüdyo, Topluluk ve KÖPRÜ",
      ozet: "Öğretmendekiyle aynı çalışan bölümler.",
      bloklar: [
        { t: "img", src: "img/stu_07_ai_studyo.jpg", cap: "Öğrencinin AI Stüdyo ekranı" },
        { t: "list", items: [
          "<b>AI Stüdyo</b> öğretmendekiyle aynıdır: Metin, Görsel, Ses, Video; altta Keşfet. Uygunsuz istekleri <b>Güvenlik Duvarı</b> engeller.",
          "<b>Topluluk</b>'ta okulda herkese açık paylaşılan üretimler görünür.",
          "<b>KÖPRÜ</b> okulun diğer platformlarını açar."
        ]},
        { t: "img", src: "img/stu_08_topluluk.jpg", cap: "Öğrencinin Topluluk ekranı" },
        { t: "tip", h: "Öğrencilere yapay zekâ çıktısını kontrol etmeyi öğretin. TYMM görevlerinin bir kısmı tam da bunu ister: yapay zekânın cevabını kitapla karşılaştırmak." }
      ]
    },

    /* ============================ YÖNETİCİ ============================ */
    {
      id: "yonetici-menu", rol: "yonetici", baslik: "Okul yöneticisi menüsü",
      ozet: "Okulun tamamını gören hesap.",
      bloklar: [
        { t: "menu", items: [
          ["img/ikon/yon_1.png", "AI Araçları", "Genel Araçlar, Kuruma Özel Araçlar (yönetim), Koleksiyon."],
          ["img/ikon/yon_2.png", "AI Ajanları (BETA)", "Yakında gelecek otomasyon ajanları."],
          ["img/ikon/yon_3.png", "AI Stüdyo", "Sohbet ve üretim."],
          ["img/ikon/yon_4.png", "Sınıf Yönetimi", "Sınıf açma, öğretmen ve öğrenci yerleştirme."],
          ["img/ikon/yon_5.png", "Kullanıcı Yönetimi", "Okulun tüm öğretmen, öğrenci ve yönetici hesapları."],
          ["img/ikon/yon_6.png", "KÖPRÜ", "Okulun diğer eğitim platformları."],
          ["img/ikon/yon_7.png", "Profil", "Profil Ayarları, Çıkış Yap."]
        ]},
        { t: "img", src: "img/yon_14_menu.jpg", cap: "Yönetici menüsü açık hâli" }
      ]
    },
    {
      id: "yonetici-ana-sayfa", rol: "yonetici", baslik: "Yönetim Merkezi ve Kurumsal Analitik",
      ozet: "Okulun durumu tek ekranda; her kart bir rapora açılır.",
      bloklar: [
        { t: "img", src: "img/yon_01_ana_sayfa.jpg", cap: "Okul Yöneticisi Paneli: uyarı şeridi, Yönetim Merkezi ve Kurumsal Analitik kartları" },
        { t: "list", items: [
          "<b>Uyarı şeridi:</b> \"… durum incelenmesi öneriliyor\". Uzun süredir giriş yapmayan öğrenci ve öğretmenleri, AI araçlarını hiç kullanmayan öğretmenleri ve son iki haftadır görev atanmamış sınıfları sayar. <b>Yoksay</b> ile kapatılır.",
          "<b>Yönetim Merkezi:</b> Kullanıcı Yönetimi ve Sınıf Yönetimi kısayolları.",
          "<b>Kurumsal Analitik:</b> Toplam Öğretmen (bu ay aktif / hiç giriş yok), Toplam Öğrenci (aktif / 7+ gün giriş yok), Aktif Sınıf (hedef üstü / risk altında), Toplam Zaman Tasarrufu. Her kartta <b>İncele</b> ayrıntılı rapora gider.",
          "Aşağıda <b>Görevler</b> (tamamlanma oranı), <b>Kullanım Trendi</b> (son 12 ay, araç araç), <b>Araç Kullanımı</b> (en çok kullanılan araçlar) ve <b>Son Aktiviteler</b> (yeni öğretmen, yeni sınıf) bulunur."
        ]},
        { t: "img", src: "img/yon_02_ana_alt.jpg", cap: "Görevler, Kullanım Trendi, Araç Kullanımı ve Son Aktiviteler" }
      ]
    },
    {
      id: "yonetici-raporlar", rol: "yonetici", baslik: "Raporlar",
      ozet: "Kurumsal Analitik kartlarının İncele düğmeleri dört rapora açılır.",
      bloklar: [
        { t: "table", head: ["Rapor", "Ne gösterir?"], rows: [
          ["Öğretmen Verimlilik Raporu", "Öğretmen, branş, giriş sayısı, atanan görev. İsim veya branşla aranır."],
          ["Öğrenci Kapsamlı Raporu", "Öğrenci, sınıf, giriş sayısı, ödev tamamlama ve durum (ör. Kritik). Sınıf filtresi ve arama."],
          ["Sınıf Performans & Risk Analizi", "Sınıf, sorumlu öğretmenler, öğrenci sayısı, tamamlama yüzdesi ve risk durumu."],
          ["Zaman Tasarrufu & Verimlilik Analizi", "AI araçlarının kuruma kazandırdığı toplam süre, günlük ortalama, öğretmen / öğrenci dağılımı ve araç bazlı döküm. Bu Ay / Bu Hafta seçilir."]
        ]},
        { t: "img", src: "img/yon_03_rapor_ogretmen.jpg", cap: "Öğretmen Verimlilik Raporu" },
        { t: "img", src: "img/yon_06_rapor_zaman.jpg", cap: "Zaman Tasarrufu & Verimlilik Analizi: araç bazlı verimlilik dökümü" },
        { t: "p", h: "Her raporun sağ üstündeki <b>Panele Dön</b> ana sayfaya döndürür." },
        { t: "tip", h: "Dönemin ilk haftasında <b>Öğretmen Verimlilik Raporu</b>'nda giriş sayısı sıfır olan öğretmenleri bulun ve onlara bu rehberin bağlantısını gönderin." }
      ]
    },
    {
      id: "yonetici-sinif", rol: "yonetici", baslik: "Sınıf Yönetimi",
      ozet: "Öğretmenin ve öğrencinin gördüğü her şey buradaki sınıf yapısına bağlıdır.",
      bloklar: [
        { t: "img", src: "img/yon_07_siniflar.jpg", cap: "Sınıf Yönetimi: özet sayılar, filtreler ve sınıf kartları" },
        { t: "list", items: [
          "Üstte toplam sınıf ve öğrenci sayısı, kademe kademe (İlkokul, Ortaokul, Lise) sınıf / öğrenci dağılımı.",
          "Filtreler: <b>Ara</b>, <b>Kademe</b>, <b>Sınıf Seviyesi</b>, <b>Şube</b>, <b>Sırala</b>. Görünüm: <b>Gruplu</b>, <b>Kart</b>, <b>Liste</b>.",
          "Her kartta sınıf, kademe, öğrenci ve öğretmen sayısı, oluşturulma tarihi ve <b>Detaylar</b>."
        ]},
        { t: "h3", h: "Yeni sınıf açmak" },
        { t: "img", src: "img/yon_08_yeni_sinif.jpg", cap: "Yeni Sınıf Oluştur: Sınıf Adı ve Sınıf Seviyesi" },
        { t: "steps", items: [
          "<b>Yeni Sınıf Oluştur</b>'a basın.",
          "<b>Sınıf Adı</b> (ör. A, B, 1-A) ve <b>Sınıf Seviyesi</b> (1-12) girin, <b>Oluştur</b>.",
          "Sınıf kartındaki <b>Detaylar</b> ile sınıfı açın; öğretmen ve öğrenci atamalarını orada yapın."
        ]},
        { t: "img", src: "img/yon_09_sinif_detay.jpg", cap: "Sınıf detayı: Öğrenciler ve Öğretmenler sekmeleri, Öğrenci Ekle" },
        { t: "p", h: "Sınıf detayında <b>Öğrenciler</b> ve <b>Öğretmenler</b> sekmeleri vardır. <b>Öğrenci Ekle</b> ile öğrencileri sınıfa yerleştirirsiniz; Öğretmenler sekmesinde sınıfa derse giren öğretmenler atanır. Bir sınıfa birden fazla branş öğretmeni atanabilir." },
        { t: "warn", h: "Öğretmen yalnızca atandığı sınıfları görür, öğrenci de sınıfı yoksa öğretmenin listesinde çıkmaz. Yeni dönemde önce sınıfları açın, sonra öğretmen ve öğrencileri yerleştirin." }
      ]
    },
    {
      id: "yonetici-kullanici", rol: "yonetici", baslik: "Kullanıcı Yönetimi",
      ozet: "Okulun tüm hesapları tek listede.",
      bloklar: [
        { t: "img", src: "img/yon_10_kullanicilar.jpg", cap: "Kullanıcı Yönetimi: öğretmen ve öğrenci sayıları, rol filtresi, kullanıcı tablosu" },
        { t: "list", items: [
          "Sağ üstte öğretmen ve öğrenci sayıları yazar.",
          "Arama kutusu ve <b>Tüm Roller / Öğretmen / Öğrenci / Yönetici</b> filtresi.",
          "Tabloda kullanıcı, e-posta, rol, durum (Aktif) ve branş ya da sınıf seviyesi. Satırın sonundaki <b>⋮</b> kullanıcı işlemlerini açar.",
          "<b>Yeni Kullanıcı Ekle</b> tek bir hesap eklemek içindir."
        ]},
        { t: "tip", h: "Okulun tüm hesapları dönem başında genellikle toplu açılır. Toplu hesap açılışı için AI-LA ekibine öğretmen ve öğrenci listenizi (ad, soyad, e-posta ya da TC Kimlik No, rol, sınıf / branş) iletin." }
      ]
    },
    {
      id: "yonetici-kurum-araclari", rol: "yonetici", baslik: "Kuruma Özel Araç kurmak",
      ozet: "Okulunuza özel bir yapay zekâ aracı tanımlayın, test edin, yayınlayın.",
      bloklar: [
        { t: "img", src: "img/yon_12_kurum_araclari.jpg", cap: "Kurum Araçları: araç adı, rol, çıktı türü, durum, işlemler" },
        { t: "p", h: "Yönetici, <b>AI Araçları › Kuruma Özel Araçlar</b>'da okulun araçlarını listeler: araç adı, kimlerin kullanabildiği (Öğretmen / Öğrenci), çıktı türü (text / image) ve durum (Aktif). Satır sonundaki <b>⋯</b> ile düzenler." },
        { t: "img", src: "img/yon_13_yeni_arac.jpg", cap: "Yeni Kurum Aracı: 1. Temel Bilgiler, 2. Prompt & Girdiler, 3. Test & Onay" },
        { t: "steps", items: [
          "<b>Yeni Araç Oluştur</b>'a basın.",
          "<b>Temel Bilgiler:</b> Sistem Adı (İngilizce küçük harf, alt çizgi: ör. gorselli_sinav), Görünen Ad, Açıklama, <b>Kimler Kullanabilir?</b> (Öğretmen / Öğrenci / Yönetici) ve <b>Çıktı Türü</b> (Metin veya Görsel).",
          "<b>İleri: Prompt ve Girdiler</b>: aracın yapay zekâya vereceği talimatı ve kullanıcıdan isteyeceği alanları tanımlayın.",
          "<b>Test & Onay</b>: aracı deneyin, sonuç istediğiniz gibiyse yayınlayın. Araç seçtiğiniz rollerin Kuruma Özel Araçlar ekranında görünür."
        ]}
      ]
    },

    /* ============================ GÖREV AKIŞI ============================ */
    {
      id: "gorev-turleri", rol: "gorev", baslik: "İki tür görev",
      ozet: "Öğretmen görevleri ve TYMM görevleri farklı yollardan gelir.",
      bloklar: [
        { t: "table", head: ["", "Öğretmen Görevi", "TYMM Görevi"], rows: [
          ["Kim hazırlar?", "Öğretmen, AI araçlarıyla (ör. Karışık Sınav Oluştur)", "Hazır gelir, haftalık"],
          ["Öğretmen nereden verir?", "Koleksiyon › içerik › <b>Öğrencilere ata</b>", "Öğretmenin bir şey yapmasına gerek yoktur"],
          ["Öğrenci nerede görür?", "Görevlerim › <b>Öğretmen Görevleri</b>", "Görevlerim › <b>TYMM Görevleri</b>"],
          ["Nasıl teslim edilir?", "Sorular cevaplanır, <b>Cevapları Gönder</b>", "Metin + görsel yüklenir, yapay zekâ kriterlere göre değerlendirir, öğrenci <b>Öğretmene Gönder</b>'e basar"],
          ["Öğretmen nerede izler?", "Sınıf Yönetimi › sınıf › <b>Verilen ödevler</b>", "Sınıf Yönetimi › <b>TYMM Görevleri</b>"]
        ]}
      ]
    },
    {
      id: "ogretmen-gorevi", rol: "gorev", baslik: "Öğretmen görevi: üret, ata, izle",
      ozet: "Bir sınavı üretip sınıfa atamak, beş adım.",
      bloklar: [
        { t: "flow", items: ["Araç ile üret", "Koleksiyon", "Öğrencilere ata", "Öğrenci teslim eder", "Verilen ödevler"] },
        { t: "steps", items: [
          "<b>AI Araçları › Genel Araçlar</b>'dan atanabilir bir içerik üretin (ör. <b>Karışık Sınav Oluştur</b>).",
          "<b>Koleksiyon</b>'da içeriği bulun (kartta <b>Atanabilir</b> yazar) ve <b>İncele</b>'ye basın. Soruları okuyun, gerekirse <b>Düzenle</b>.",
          "<b>Öğrencilere ata</b>'ya basın. Açılan pencerede <b>Sınıf</b> seçin; <b>Tüm sınıfa</b> ya da <b>Seçili öğrencilere</b> atayın; <b>Tahmini süre (dakika)</b> girin; <b>Ödevi ata</b>.",
          "Öğrenci görevi <b>Görevlerim › Öğretmen Görevleri</b>'nde görür, <b>Başla › Ödeve Başla</b> ile açar, <b>Cevapları Gönder</b> ile teslim eder.",
          "Siz <b>Sınıf Yönetimi › sınıf › Verilen ödevler</b>'de her öğrencinin durumunu görürsünüz. Yanlış atamayı <b>Kaldır</b> ile geri alırsınız."
        ]},
        { t: "img", src: "img/ogr_08_ata.jpg", cap: "Öğrencilere ödev ata: sınıf, tüm sınıfa / seçili öğrencilere, tahmini süre" },
        { t: "warn", h: "<b>Ödevi ata</b>'ya bastığınız anda görev öğrencilerin ekranına düşer. Süreyi ve sınıfı kontrol ettikten sonra basın." }
      ]
    },
    {
      id: "tymm-gorevi", rol: "gorev", baslik: "TYMM görevi: üret, değerlendir, onayla",
      ozet: "Haftalık görev; yapay zekâ ön değerlendirir, son söz öğretmende.",
      bloklar: [
        { t: "flow", items: ["Görev düşer", "Öğrenci üretir", "Yükler", "AI kriterlere bakar", "Öğretmene Gönder", "Öğretmen onaylar"] },
        { t: "steps", items: [
          "Her hafta görev öğrencinin <b>Görevlerim › TYMM Görevleri</b> listesine düşer (durum: <b>Yapılacak</b>).",
          "Öğrenci <b>Görüntüle</b> ile açar, <b>Talimatlar</b>'ı ve <b>Kriterler</b>'i okur, gerekirse yapay zekâ ile çalışarak ürününü hazırlar.",
          "Gönderim alanına metnini yazar, istenen görseli ekler ve gönderir. \"Gönderim alındı, değerlendiriliyor...\" yazar; durum <b>Değerlendiriliyor</b> olur.",
          "Kısa süre sonra her kriterin yanında yeşil ✓ ya da kırmızı ✕ ve bir cümlelik gerekçe çıkar; üstte puan kutusu görünür (tüm kriterler tamamsa yeşil, eksik varsa sarı).",
          "Öğrenci eksikleri düzeltip yeniden gönderebilir. Her görevin bir <b>kalan deneme hakkı</b> vardır; her gönderim bir hak harcar.",
          "Hazır olunca <b>Öğretmene Gönder</b>'e basar; durum <b>Öğretmende</b> olur.",
          "Öğretmen görevi <b>Sınıf Yönetimi › TYMM Görevleri</b>'nde inceler: <b>onaylar</b> ya da <b>revizyon ister</b>, puan ve kısa bir not bırakır. Öğrenci notu görev sayfasındaki <b>Öğretmen Değerlendirmesi</b> kutusunda görür."
        ]},
        { t: "h3", h: "TYMM durum etiketleri" },
        { t: "table", head: ["Etiket", "Anlamı"], rows: [
          ["Yapılacak", "Görev açıldı, henüz gönderim yok."],
          ["Devam Ediyor", "Öğrenci göreve başladı."],
          ["Değerlendiriliyor", "Yapay zekâ gönderimi kriterlere göre inceliyor."],
          ["Öğretmende", "Öğrenci gönderimi öğretmene iletti, onay bekleniyor."],
          ["Öğretmen Revizyon İstedi", "Öğretmen düzeltme istedi; öğrenci yeni gönderim yapar."],
          ["Tamamlandı / Onaylandı", "Öğretmen onayladı."],
          ["Süresi Doldu", "Son teslim tarihi geçti."],
          ["Değerlendirme Hatası", "Otomatik değerlendirme tamamlanamadı; öğrenci yeniden göndermeyi dener, sorun sürerse öğretmene haber verir."]
        ]},
        { t: "tip", h: "Yapay zekânın puanı bir ön değerlendirmedir. Görevi onaylayan ya da revizyon isteyen her zaman öğretmendir." }
      ]
    },
    {
      id: "esleme", rol: "gorev", baslik: "Siz ne yaparsanız kim nerede görür?",
      ozet: "Üç ekranın eşleşmesi.",
      bloklar: [
        { t: "table", head: ["Yapılan iş", "Nerede görünür?"], rows: [
          ["Öğretmen Koleksiyon'dan <b>Öğrencilere ata</b> der", "Öğrenci: Görevlerim › Öğretmen Görevleri · Öğretmen: sınıf › Verilen ödevler · Yönetici: Öğretmen Verimlilik Raporu › Atanan Görev"],
          ["Öğrenci TYMM görevinde <b>Öğretmene Gönder</b> der", "Öğretmen: Sınıf Yönetimi › TYMM Görevleri"],
          ["Öğretmen bir üretimi <b>Paylaş</b> ile herkese açar", "Herkes: Topluluk"],
          ["Yönetici bir <b>Kurum Aracı</b> yayınlar", "Seçilen roller: AI Araçları › Kuruma Özel Araçlar"],
          ["Yönetici sınıfa öğretmen / öğrenci atar", "Öğretmen: Sınıf Yönetimi › Sınıflarım ve Tüm Öğrencilerim"],
          ["Öğretmen ya da öğrenci bir AI aracı kullanır", "Yönetici: Kullanım Trendi, Araç Kullanımı, Zaman Tasarrufu raporu"]
        ]}
      ]
    },

    /* ============================ SSS ============================ */
    {
      id: "sss", rol: "sss", baslik: "Sık sorulan sorular",
      ozet: "İlk haftada en çok sorulanlar.",
      bloklar: [
        { t: "table", head: ["Soru", "Cevap"], rows: [
          ["Şifremi unuttum.", "Okul yöneticinize başvurun. Giriş yaptıktan sonra Profil Ayarları › Parolayı Değiştir ile kendi şifrenizi belirleyin."],
          ["Bir sınıfım ya da öğrencim görünmüyor.", "Sınıf ve öğrenci yerleştirmeyi okul yöneticisi yapar. Sınıfın adını ve eksik öğrenciyi yöneticinize iletin."],
          ["Öğrenci görevini nerede görür?", "Sol menüde <b>Görevlerim</b>. Öğretmenin atadıkları Öğretmen Görevleri'nde, haftalık görevler TYMM Görevleri'nde."],
          ["Koleksiyon'daki içeriğimde \"Öğrencilere ata\" yok.", "Yalnızca <b>Atanabilir</b> etiketli içerikler (ör. sınavlar) görev olarak verilebilir. Diğerlerini PDF Kaydet ile indirip sınıfta kullanın ya da Paylaş ile paylaşın."],
          ["Öğrencinin TYMM görevi bende görünmüyor.", "Öğrenci <b>Öğretmene Gönder</b>'e basmadıysa görev sizde listelenmez. Öğrenci ekranında durum Öğretmende olmalı."],
          ["Yapay zekâ bir kriteri yanlış değerlendirdi.", "Ön değerlendirmedir; son karar sizindir. İncelerken onaylayabilir ya da revizyon isteyebilirsiniz."],
          ["Kredim bitti.", "AI Stüdyo üretimleri ve araçlar kredi harcar. Kredi miktarı kuruma göre değişir; mevcut krediniz Profil Ayarları'nda yazar. Ek kredi için okul yönetiminize başvurun."],
          ["AI Ajanları çalışmıyor.", "Bölüm BETA'dır ve ajanlar şu an YAKINDA etiketlidir."],
          ["Öğrenci uygunsuz bir şey sorarsa?", "AI-LA'nın Güvenlik Duvarı bu tür istekleri engeller. Yine de şüpheli bir içerik görürseniz ekran görüntüsüyle okul yönetiminize bildirin."],
          ["Ekranım rehberdekinden farklı renkte.", "AI-LA okulunuzun logosu ve renkleriyle açılır. Menüler ve düğmeler aynıdır."]
        ]}
      ]
    },
    {
      id: "ilk-hafta", rol: "sss", baslik: "İlk hafta kontrol listesi (öğretmen)",
      ozet: "İşaretledikleriniz bu tarayıcıda saklanır.",
      bloklar: [
        { t: "check", items: [
          "AI-LA'ya girdim, tanıtım penceresini okudum ve Profil Ayarları'ndan şifremi değiştirdim.",
          "☰ ile menüyü açıp tüm bölümlerin adını gördüm.",
          "Öğretmenimizi Tanıyalım formunu doldurdum.",
          "Sınıf Yönetimi'nde sınıflarımı ve öğrencilerimi kontrol ettim; eksikleri okul yöneticisine bildirdim.",
          "Ders Planı Oluştur ile bir ders planı hazırladım ve Koleksiyon'da buldum.",
          "Karışık Sınav Oluştur ile bir sınav üretip bir sınıfa Öğrencilere ata ile verdim.",
          "Öğrencilere derste Görevlerim yolunu gösterdim.",
          "AI Stüdyo'da bir görsel ürettim.",
          "Sınıf › Verilen ödevler ekranında teslimleri izledim.",
          "Sınıf Yönetimi › TYMM Görevleri'nde gelen bir görevi inceledim."
        ]}
      ]
    },
    {
      id: "yonetici-hafta", rol: "sss", baslik: "Dönem başı kontrol listesi (okul yöneticisi)",
      ozet: "İşaretledikleriniz bu tarayıcıda saklanır.",
      bloklar: [
        { t: "check", items: [
          "Kullanıcı Yönetimi'nde tüm öğretmen ve öğrenci hesaplarının açıldığını kontrol ettim.",
          "Sınıf Yönetimi'nde bu dönemin sınıflarını açtım.",
          "Her sınıfa öğretmenleri ve öğrencileri yerleştirdim.",
          "Kuruma Özel Araçlar'ı gözden geçirdim; öğrenciye açılacakları belirledim.",
          "Bir hafta sonra Öğretmen Verimlilik Raporu'nda hiç giriş yapmayan öğretmenleri kontrol ettim."
        ]}
      ]
    },
    {
      id: "kaynaklar", rol: "sss", baslik: "Kaynaklar",
      ozet: "AI-LA hakkında daha fazlası.",
      bloklar: [
        { t: "video", items: [
          ["ai-la.ai", "https://ai-la.ai", "AI-LA'nın resmî sitesi"]
        ]},
        { t: "p", h: "Ekranla ilgili bir sorununuz olursa önce okul yöneticinize, çözülmezse okulunuzun AI-LA iletişim kişisine ulaşın. Ekran görüntüsü eklemek sorunun hızla anlaşılmasını sağlar." }
      ]
    }
  ]
};
