# Interactive Digital Birthday Card

> Thiệp sinh nhật kỹ thuật số dạng trang web tĩnh. Người nhận có thể tương tác với nến, xem thông tin và bộ đếm thời gian, đọc lời chúc, xem ảnh kỷ niệm và bật/tắt nhạc nền.

## Mục lục

- [Thông tin sản phẩm](#thông-tin-sản-phẩm)
- [Liên kết](#liên-kết)
- [Công nghệ](#công-nghệ)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Chạy trên máy cá nhân](#chạy-trên-máy-cá-nhân)
- [Xuất bản](#xuất-bản)
- [Hướng dẫn kiểm tra](#hướng-dẫn-kiểm-tra)
- [Tác giả](#tác-giả)

## Thông tin sản phẩm

- **Tên:** Interactive Digital Birthday Card
- **Mục đích:** Một tấm thiệp sinh nhật tương tác gồm ba màn hình, hiệu ứng nến và pháo giấy, bộ đếm thời gian, lời chúc dạng chữ chạy, băng chuyền ảnh và nhạc nền.
- **Tác giả:** Trần Việt Anh (Vanh)
- **Thương hiệu:** VanhCodes – Vanh Love IT

## Liên kết

- **GitHub Repository:** Chưa được cung cấp; thư mục hiện tại không có metadata Git hoặc remote để xác minh URL.
- **Sản phẩm trực tuyến:** Chưa có địa chỉ triển khai được cung cấp.
- **Liên kết ngoài trong sản phẩm:** Google Fonts được tham chiếu trong `index.html` để tải phông chữ.

## Công nghệ

| Công nghệ        | Vai trò trong dự án                                                 |
| ---------------- | ------------------------------------------------------------------- |
| HTML5            | Cấu trúc ba màn hình và nội dung thiệp                              |
| CSS3             | Giao diện, hoạt ảnh và bố cục co giãn theo khung nhìn               |
| JavaScript thuần | Chuyển màn hình, tương tác, bộ đếm, chữ chạy và điều khiển âm thanh |
| HTML Canvas      | Hiệu ứng pháo giấy                                                  |
| SVG              | Đồ họa trang trí quanh ảnh đại diện                                 |
| Google Fonts     | Các phông Be Vietnam Pro, JetBrains Mono và Mali                    |

Dự án không khai báo framework, thư viện JavaScript, trình quản lý gói hoặc công cụ build.

## Cấu trúc dự án

```text
birthday_card/
├── assets/
│   ├── avatar.jpg
│   ├── images.jpg
│   ├── images1.jpg
│   ├── images2.jpg
│   ├── images3.jpg
│   └── snaptik.vn_7687991911730154772.mp3
├── index.html
├── script.js
├── style.css
└── README.md
```

- `index.html`: Trang thiệp và các phần tử giao diện.
- `style.css`: Kiểu dáng, hoạt ảnh và bố cục.
- `script.js`: Cấu hình người nhận, lời chúc, ảnh và logic tương tác.
- `assets/`: Ảnh đại diện, ảnh kỷ niệm và nhạc nền được trang sử dụng.

## Chạy trên máy cá nhân

### Yêu cầu

- Máy tính có trình duyệt web hiện đại.
- Không cần cài Node.js, framework, thư viện hay phần mềm build.
- Kết nối Internet chỉ cần thiết để tải phông chữ Google Fonts; tệp ảnh và nhạc được lưu cục bộ trong `assets/`.

### Các bước

1. Nhận source code bằng cách tải thư mục dự án về máy. URL clone không có sẵn vì repository chưa được cung cấp.
2. Giữ nguyên `index.html`, `script.js`, `style.css` và thư mục `assets/` cùng vị trí tương đối.
3. Mở `index.html` trực tiếp bằng trình duyệt. Không có lệnh chạy server được khai báo trong dự án.
4. Thiệp sẽ mở tại màn hình đầu tiên trong trình duyệt; chuyển màn hình bằng các nút điều hướng hoặc các chấm ở cuối thiệp.

## Xuất bản

Chưa xác định nền tảng xuất bản và chưa có liên kết sản phẩm trực tuyến được cung cấp. Vì vậy, hiện chỉ có thể mở bản local theo hướng dẫn trên.

## Hướng dẫn kiểm tra

Mở `index.html` và thực hiện các thao tác sau:

| Phần/chức năng               | Thao tác                                          | Kết quả mong đợi                                                                                                        |
| ---------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Màn hình mở đầu và thổi nến  | Nhấn vào bánh/nến hoặc nút mở thiệp               | Ngọn nến tắt, có hiệu ứng khói và pháo giấy, sau đó chuyển sang màn hình 2; thao tác cũng yêu cầu trình duyệt phát nhạc |
| Chuyển cảnh                  | Dùng các nút điều hướng hoặc chấm ở cuối thiệp    | Màn hình tương ứng xuất hiện với hiệu ứng mờ và trượt                                                                   |
| Thông tin người nhận         | Mở màn hình 2                                     | Hiện ảnh đại diện, tên và huy hiệu lấy từ cấu hình trong `script.js`                                                    |
| Bộ đếm thời gian             | Quan sát màn hình 2 trong vài giây                | Ngày, giờ, phút và giây tăng theo thời gian từ ngày sinh cấu hình trong `script.js`                                     |
| Lời chúc                     | Chuyển sang màn hình 3                            | Lời chúc lần lượt hiện theo hiệu ứng chữ chạy                                                                           |
| Băng chuyền ảnh              | Quan sát dải ảnh trên màn hình 3                  | Các ảnh trong `assets/` chạy liên tục theo chiều ngang; rê chuột hoặc chạm vào dải để tạm dừng                          |
| Lightbox                     | Chọn một ảnh trong dải                            | Ảnh lớn và chú thích xuất hiện; chọn vùng ngoài để đóng                                                                 |
| Pháo giấy                    | Nhấn nút bắn pháo hoa trên màn hình 3             | Hiệu ứng pháo giấy xuất hiện trên trang                                                                                 |
| Nhạc nền                     | Nhấn nút nhạc ở góc trên                          | Nhạc phát hoặc dừng và nhãn nút cập nhật tương ứng; trình duyệt có thể yêu cầu tương tác trước khi phát                 |
| Bố cục trên thiết bị di động | Mở trang ở cửa sổ hẹp hoặc trình giả lập thiết bị | Kiểm tra thẻ và nút vẫn dùng được trong chiều rộng hẹp; CSS hiện không khai báo breakpoint `@media` riêng               |

## Tác giả

- **Author:** Trần Việt Anh (Vanh)
- **Brand:** VanhCodes – Vanh Love IT
