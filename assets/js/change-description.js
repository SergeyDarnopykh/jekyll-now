const siteDecription = document.querySelectorAll('#siteDescription');
const descriptions = [ 'magento developer', 'web developer' ];

for (let i = 0; ; i++) {
    if (i === descriptions.length) i = 0;

    setTimeout(3000, function () { siteDecription.innerHTML = descriptions[i]; })
}