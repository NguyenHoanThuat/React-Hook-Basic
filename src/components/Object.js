/**
 * Khai báo biến rectangle là 1 object gồm có các property:
 * - width: chiều rộng
 * - height: chiều dài
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều dài
 * - getArea: trả về diện tích
 */

const rectangle = {
  width: 100,
  height: 50,
  getWidth: () => {
    return this.width;
  },
  getHeight: () => {
    return this.height;
  },
  getArea: () => {
    return this.getWidth * this.getHeight;
  },
};

console.log(rectangle.getWidth);
