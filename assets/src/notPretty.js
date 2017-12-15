var frst = jQuery('.images img').first();
frst.removeAttr('srcset');
var src = (frst.attr('src'));
jQuery('.product_images .thumbnails.columns-3 img').each(function(){
  // Все работает отлично, но срц содержит ссылку не на полную картинку а на тамбнейл. Нужно извлечь ссылку до последнего слеша и соединить с тайтлом картинки, получим полную картинку.
  // возьми caption url и готово
var sors = jQuery(this).attr('url');
var titla = jQuery(this).attr('title');
 jQuery(this).appendTo('#lightgallery');
 jQuery(this).wrap('<a class="item smalls" href="'+ sors +'"></a>');
jQuery('li.proud img').attr('src', src);
jQuery('li.proud a').attr('href', src);
jQuery(this).parent('a').attr('krestrage2', titla);
}),
jQuery('.product_images .thumbnails.columns-3').detach() , frst.detach(), jQuery('#lightgallery').addClass('thumbnails', 'columns-3').lightGallery({selector: '.item'}),
jQuery('.item.smalls').wrapAll('<div class="smalls-banner"></div>');
jQuery('.smalls-banner .smalls-banner .smalls-banner').unwrap();
jQuery('.smalls-banner .smalls-banner').unwrap();



var relatedProducts = jQuery('.related.products');

if(jQuery('.related.products li.product.type-product').length < 4)
{
relatedProducts.detach();
}
