# Reflection: DOM thuần vs React

## 1. Tại sao thao tác DOM trực tiếp lại khó maintain?
Thao tác DOM trực tiếp (Imperative) yêu cầu chúng ta phải tự quản lý từng bước thay đổi giao diện (tìm element, tạo element, gán class, gán event, append...). Khi ứng dụng lớn dần lên, code sẽ trở thành một mớ bòng bong (spaghetti code) rất khó để theo dõi trạng thái hiện tại của UI, dẫn đến các lỗi (bug) hiển thị không đồng bộ với dữ liệu.

## 2. Điểm khác biệt lớn nhất về tư duy giữa hai cách tiếp cận?
- **Vanilla JS (Imperative):** Tư duy "Làm thế nào" (How). Mình phải ra lệnh cho máy tính thực hiện từng bước một. Ví dụ: Tạo `<li>`, đặt text, thêm `class`, thêm `button`, thêm event listener, sau đó gắn vào `<ul>`.
- **React (Declarative):** Tư duy "Cái gì" (What). Mình chỉ việc định nghĩa giao diện sẽ trông như thế nào dựa trên dữ liệu (State). Khi State thay đổi, React tự động lo phần "làm thế nào" để cập nhật giao diện (thông qua Virtual DOM).

## 3. Bạn thích cách nào hơn? Tại sao?
Tôi thích cách của **React** hơn. Tuy lúc đầu phải học cú pháp JSX và State có vẻ hơi lạ lẫm, nhưng khi viết code, việc chỉ cần quan tâm đến dữ liệu (`todos` array) và ánh xạ nó ra UI bằng hàm `map()` giúp code ngắn gọn, dễ đọc, dễ hiểu và an toàn hơn rất nhiều. Khỏi lo bị rò rỉ bộ nhớ (memory leak) do quên xóa event listener như bên DOM thuần.

## 4. Virtual DOM trong React giải quyết vấn đề gì?
Virtual DOM là một bản sao ảo của giao diện trong bộ nhớ. Khi State thay đổi, React sẽ tạo ra một Virtual DOM mới, sau đó so sánh (Diffing) với bản cũ để tìm ra đúng phần nào bị thay đổi. Cuối cùng, nó chỉ cập nhật (Patching) chính xác phần đó lên DOM thật. Điều này giúp:
- **Tối ưu hiệu năng:** Tránh việc phải vẽ lại toàn bộ trang web gây giật lag.
- **Trải nghiệm code tốt hơn:** Cho phép lập trình viên viết code theo kiểu re-render toàn bộ giao diện (Declarative) mà không sợ bị chậm chương trình.
