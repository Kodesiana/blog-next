---
title: "Sistem Diserang, Sekarang Harus Apa?🤔"
slug: sistem-diserang-sekarang-harus-apa
publishedAt: 2022-10-18
tags: [security, azure, cloud, internet]
---

Setelah beberapa waktu lalu sistem Kodesiana diserang dari luar

## 1️⃣ Your System is Always Public

Sekali kita membuat subdomain dengan rute DNS yang mengarah ke server, maka sistem tersebut dapat diakses secara publik.

> Sub sistem yang diserang ini _private_, lho

Tim Kodesiana tidak pernah mempublikasikan alamat URL sub sistem ini kepada siapa pun selain _stakeholder_ dan tim internal Kodesiana.com. Bahkan, tim internal hanya mengakses melalui VPN dan akses ke komponen sistem di sisi Azure juga menggunakan **Virtual Network** dan **Private Endpoints**. Jadi, _human error_ di sisi tim Kodesiana bisa dibilang rendah dan vektor serangan mungkin dari sisi _stakeholder_.

Meskipun kita bisa melakukan WHOIS ke domain kodesiana.com, kecil kemungkinan untuk orang lain untuk dapat mengetahui subdomain sub sistem ini.

Kenapa?

Domain kodesiana.com memiliki setidaknya 4 subdomain lain yang bisa diakses publik, tapi dari sistem monitoring, tidak ada _request_ yang masuk. Temuan ini cukup aneh bagi penulis, jika benar penyerang ingin menerobos sistem Kodesiana, kenapa hanya dari satu subdomain saja? Kenapa tidak coba semua subdomain?

Apakah ini serangan terarah yang khusus menyerang sub sistem ini karena sistem ini kebetulan **milik pemerintah**? Hmm🤔

## 2️⃣ Proper Protection is a Must

### 🐤 Application Tracing, Logging, Alerting

Berkat **Azure Application Insights, Azure SQL Server Auditing**, dan **CloudFlare Analytics**, penulis bisa melacak adanya akses ini terjadi. Bayangkan jika tidak ada sistem _monitoring_ dan _logging_, jika terjadi sesuatu, tim Kodesiana tidak akan dapat mencari tau sumber dan bagaimana serangan terjadi.

Meskipun tim Kodesiana sudah menggunakan berbagai sistem _monitoring_, sistem tersebut belum _proper_ dalam artian **jika terjadi serangan, penulis bisa mengetaui adanya serangan, tetapi belum bisa melacak sumbernya**. Hal ini karena sistem _logging_ yang digunakan tidak mencatat data pribadi seperti alamat IP (konsekuensi dari _data protection compliance_ yang diikuti oleh Kodesiana).

Jadi, bisa disimpulkan sistem _logging_ yang **proper** itu penting ya! Bukan hanya untuk melacak adanya serangan, tapi juga untuk melacak performa aplikasi melalui _APM (Application Performance Monitoring)_ dan _distributed tracing_. Tentu sistem ini juga perlu dibayar dan juga menjadi salah satu _concern_ tambahan bagi _developer_ untuk mengintegrasikan APM pada sistem sehingga sering kali diabaikan.

### 🧱 Web Application Firewall

Selain tim _operations_ perlu **tahu** bahwa adanya serangan, sistem juga perlu secara proaktif menanggulangi adanya usaha serangan, seperti penggunaan _firewall_ untuk memblokir _request_ yang bersifat berbahaya. Pada kasus Kodesiana, kita sudah menggunakan WAF dari CloudFlare, sehingga saat adanya usaha serangan, CloudFlare dapat mendeteksi dan admin Kodesiana dapat secara opsional mengaktifkan **Under attack mode** untuk membatasi _traffic_ masuk ke sistem Kodesiana dengan menampilkan CAPTCHA agar _traffic_ dari _bot_ dapat dihindari.

Selain itu, CloudFlare juga menyediakan layanan pertahanan dari DDoS dan berbagai serangan dan optimalisasi _web app_ seperti _minification_ dan _response caching_ sehingga aplikasi yang kita buat bisa lebih aman dan cepat.

### 🐣 Secure and Performant Codebase

Tim Kodesiana menggunakan ASP.NET Core dan .NET 7 yang sangat efisien dan juga menggunakan layanan cloud Azure sebagai server aplikasi, sehingga adanya _spike_ pada _traffic_ tidak akan terlalu berpengaruh terhadap performa aplikasi karena kode dari sisi aplikasi dapat meng-_handle_ banyak request dan sistem di Azure mampu melakukan _auto-scaling_ untuk menambah _instance_ dan melakukan _load-balancing_ ketika terjadi penambahan _traffic_.

Selain itu, sistem Kodesiana sudah mengikuti _best practice_ dan standar industri sehingga mampu melayani _traffic_ dan juga kebutuhan pengguna kapan pun dan di mana pun 😍

## 3️⃣ Early Response is Critical

**Kebetulan** saat itu penulis sedang membuka Azure Portal dan bisa mendeteksi dan mengaktifkan _under attack mode_ di sistem CloudFlare. Jika penulis tidak melakukan hal tersebut, apa yang akan terjadi?

Tidak ada yang akan terjadi juga sih, haha😆

Kenapa? Karena sistem yang dibuat oleh tim Kodesiana tidak menggunakan WordPress, sehingga sistemnya aman ketika diserang menggunakan _script crawler PHP_ wkw. Ya tidak masalah juga karena sistem API yang dibuat juga sudah aman dan server di Azure dapat melakukan _auto scaling_. Jadi, secara aplikasi dan server, seharusnya tidak ada yang perlu dikhawatirkan karena dengan layanan cloud, semua kebutuhan sistem sudah terpenuhi.

Tapi tentu, dengan adanya respons cepat, tim bisa melakukan analisis lebih cepat, menyiapkan reservasi budget untuk menambah server, dan hal-hal lain untuk menanggulangi adanya serangan termasuk _backup_.

## 4️⃣ Site Recovery Must be Available

Tim Kodesiana selalu melakukan _backup_ setiap hari (_hourly_ untuk basis data kritikal) sehingga jika terjadi kehilangan data, kita bisa mengembalikan data dari _backup_. Selain itu, kita juga menggunakan _geo-replication_ untuk mencegah adanya _down time_ karena ada _region_ Azure yang tidak dapat diakses.

Selain dari sisi basis data, semua kode dan _Docker image_ selalu disimpan pada repositori dan _registry_ sehingga bisa dilakukan _rollback_ kapan pun ke kondisi sistem yang paling stabil.

Untunglah pada kasus serangan ini, tidak perlu dilakukan _restore_ karena serangan tersebut secara efektif bisa dibilang gagal.

## 5️⃣ Play with a Breach Protocol

Seperti yang penulis ceritakan di awal, ini adalah pertama kalinya sistem Kodesiana diserang dari luar (bukan dari _pentesting_ yang dilakukan tim Kodesiana)

## ✏️ Referensi

1. benacler. 2021. [alfacgiapi, hacked, files not detected by Wordfence](https://wordpress.org/support/topic/alfacgiapi-hacked-files-not-detected-by-wordfence/). Diakses 10 Oktober 2022.
2. stratocaster. 2020. [Hacked by “Sole Sad & Invisible”](https://wordpress.org/support/topic/hacked-by-sole-sad-invisible/). Diakses 10 Oktober 2022.
3. carlosrms. 2020. [Alfa-Shell by ALFA TEAM/solevisible (adminow) – How to remove wordpress virus?](https://wordpress.org/support/topic/alfa-shell-by-alfa-team-solevisible-adminow-how-to-remove-wordpress-virus/). Diakses 10 Oktober 2022.
4. Leal, Luke. 2020. [ALFA TEaM Shell ~ v4.1-Tesla: A Feature Update Analysis](https://blog.sucuri.net/2020/11/alfa-team-shell-v4-1-tesla-a-feature-update-analysis.html). Diakses 10 Oktober 2022.
