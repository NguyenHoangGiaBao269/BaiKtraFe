// Giá sản phẩm cố định
const productPrice = 1034550;

function updateQuantity(change) {
    const qtyInput = document.getElementById('quantity');
    let currentQty = parseInt(qtyInput.value);
    
    currentQty += change;
    
    // Đảm bảo số lượng không nhỏ hơn 1
    if (currentQty < 1) {
        currentQty = 1;
    }
    
    // Cập nhật lại giá trị ô input số lượng
    qtyInput.value = currentQty;
    
    // Tính giá trị Tạm tính = Số lượng * Giá sản phẩm
    const totalAmount = currentQty * productPrice;
    
    // Định dạng tiền tệ kiểu Việt Nam (có dấu phân cách và ký hiệu đ)
    const formattedTotal = totalAmount.toLocaleString('vi-VN') + '<sup>₫</sup>';
    
    // Hiển thị vào trường Tạm tính
    document.getElementById('tam-tinh').innerHTML = formattedTotal;
}
