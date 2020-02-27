var tt_anh=1;
show(tt_anh); //Goi ham show(m)
function Dieu_huong(n){ 		//sẽ truyền n=1 khi duoc goi tu ham setInterval hoac nut next
	tt_anh=tt_anh + n;
	show(tt_anh); //Goi ham show(m)
}
function show(m){
	var i;
	var x=document.getElementsByClassName("show");
	if( m < 1 )
		tt_anh = x.length;
	if( m > x.length )
		tt_anh = 1;
	//Ẩn tất cả ảnh
	for(i=0; i < x.length; i++)
	{
		x[i].style.display="none";
	}
	//chỉ hiện ảnh tại vtri trỏ đến
	x[tt_anh-1].style.display="inline";
}

setInterval(function(){ Dieu_huong(1);} , 3000); //Tự động thực hiện công việc chuyển slide sau 3(s)
