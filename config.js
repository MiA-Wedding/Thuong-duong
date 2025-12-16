/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: " Tuấn Dương  ",
  brideName: "Ninh Thương",

  weddingDate: "01/03/2026  15:30:00",
  location: "  Ninh Xá Thượng-Vũ Dương-Ninh Bình ",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/vtMNEwZzwfEX7Lqm9",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5247.056387594222!2d106.03853697523734!3d20.31542628116139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDE4JzU1LjUiTiAxMDbCsDAyJzI4LjAiRQ!5e1!3m2!1svi!2s!4v1765876138069!5m2!1svi!2s",
  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/w31-Emz9bac",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Tuấn Dương ",
      parents: "Bố: Nguyễn Quang Tuấn<br>Mẹ: ĐLê Thị Vân",
      address: "Địa chỉ: TDP Xuân Hoà - Phường Tự Lạn - Bắc Ninh	"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Ninh Thương",
      parents: "Bố: Ninh Xuân Oanh<br>Mẹ: Bùi Thị Oanh",
      address: "Địa chỉ: thôn Ninh Xá Thượng - xã Vũ Dương - tỉnh Ninh Bình"
    }
  },
  qr: [
    {src: "assets/QR01.jpg", title: "NINH THI THUONG ", info: "25120520049999 - MB Bank"},
  ],
};
