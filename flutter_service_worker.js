'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c4bcef3b79c67ce8ab8f3b2a7cbe4ec5",
"index.html": "01581c4da8324fa732c00943a29471ca",
"/": "01581c4da8324fa732c00943a29471ca",
"main.dart.js": "7a937217e01e6eef3d675568ed234f5a",
"img/mac-spinning-wheel.gif": "06f71139bd05fdfc0f775932c6937f28",
"favicon.png": "fcadccdf81355b9ba961730622e0d034",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f930737c431a5a65ae424803bc46a54f",
".git/ORIG_HEAD": "08c0a713010b3b143980a1226785e5ca",
".git/config": "f847e9366625f903fb53bd6f10eb250d",
".git/objects/0d/5c98ac39d52accc3a2c3a8292856f27207905a": "6cbac15af62fa6006e47db39a0bebe04",
".git/objects/0d/a19ef4ad63077e27f1ab1f45bad5b088bb0771": "6723e992fdd8674295cc849b54dbffad",
".git/objects/59/fcd757f6c381b5b9c471ce07ddbe6e31f4d795": "cda8cfdbb2151040c304045f1471ddeb",
".git/objects/0c/dbea5e19cacc57041e2a8f98956edf2f10a01a": "1dbf820adac129900232f466ce72cef8",
".git/objects/66/60d397af354abc984cfa8b85069c5583ec4048": "24021aaf701f90c4374559da4fc8e65f",
".git/objects/66/b44526fd0b5317b4c449eac8690eeaab1bbae7": "7a3eef7b5dff6e7258c4541bad9929ba",
".git/objects/3e/526fc607f0bf2eb9b62d92ce5b9c155d7dde18": "36133db076b4803b5fcc68a0da5328dd",
".git/objects/50/faff125d8464ca60989efe6ff120eb71ca10b0": "eb24014c366006b9f73c6be14c8089ba",
".git/objects/68/7d2087d262d388e0a68f8c86237e7991544f4c": "5fefdd2f734bc552801cf06a64d085f1",
".git/objects/57/a4b114b877b02b6631386b4ef3650480552eb6": "189c6c06009dc91c4ec7a051a08da40c",
".git/objects/57/1f7430ad092f5980287741602627eed6256161": "ab39d43240001c02dc8331421347f509",
".git/objects/57/a73b2542b4c03083a22b427694fb0ef2532d80": "a79977e32ecb67397ae655bca12ee3ec",
".git/objects/03/88f19b0fb15fb9940fc87d2e12d9e8a062b055": "7024fcf05c89465d0530b712506eb65b",
".git/objects/9b/c337c3e25ce166f7261ae9a9f45fe26403bea7": "53a819204a6db319a814bd3f7ed2716e",
".git/objects/04/b2c2dfcfee2cfcf0a8b4e1c3d833586e08f3df": "973a870509acdd1010c3bf94bd7dc3ca",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/4cce3191d9da87cfb8a49d7ad0e2ba3c59cf87": "93e45b98e2f1b9afe4231ee44a65e491",
".git/objects/56/9043b5087f3d1e2536e77d674312b64b1511be": "2f8a7c4e28fea76da488c27634737b08",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/56/dc48f0417f2b33a745d930872b6b8fdfa0e826": "b492eb14344b9c3739cc5a15d1fc076d",
".git/objects/3d/4674c9e6391fdb496fd55bbad3f738b2dcbc55": "b91b271df46d00c6a1eb33e76a90c86f",
".git/objects/3d/719125e5bd398e07e92cfbd379bac04ec667d1": "287febe90c3c6701d54cc488661fc3b3",
".git/objects/58/79e79673869382b9f152594e8a7a403bf89dd1": "1074a484d20f75c14b48b8344e9607cb",
".git/objects/67/de3998951e3fed6cb507d6bb1d35178ab1f352": "05e23e8be59068b8e8aa868e0c16decb",
".git/objects/67/bd1da18adae563315768d226afbe11797bb9f9": "9c381d7efd19678b80f0c8400800b5a9",
".git/objects/94/0e942902c4c95c53cc11d73aa9ce43019c31f2": "5b86b255a78c4c806852bc033d15977e",
".git/objects/0e/24ab50725352871f000ffcf6d2eb4255de6bbf": "1c7f7b1870219468531ebfd7f1dc0807",
".git/objects/5a/f5e104d53813c883d962de7a9d1cbb0e675d87": "65cd4ea8d5b66fd513ce81a9c4ecbdf9",
".git/objects/9d/0c49c36d738c76378737c8f7c3ac218539c992": "5e5d6d2aeec14caac5fc83327ed1eb63",
".git/objects/a3/cd86371b6c32210ebaf93109225353627fdfb0": "6b864b1abf7c4edfd02225bcc013f759",
".git/objects/b5/a41c6ad4ba6e4c7809a9e1641263ac1377dd1d": "2561c48666ad27bab8ea863e2d3cca8a",
".git/objects/b2/9b43c8e1409db838da143db8f0407e3a3d46b8": "e1994d850caf0a3b5b28dccfc980de39",
".git/objects/d9/37a49f919a145d5511a5dfaca50f0810fab3a4": "d2a11753d2c86ce8ac664f3cb3d317e0",
".git/objects/ac/a814c5b36e1a1c0a94b5dc7f8d064bddd8ad69": "c1a349c39f402fb5a1350300f87305d1",
".git/objects/d0/7a604f7214c3834536a1526a81bbe2ab0330fb": "fd8491b2e9c566704f6314347e5e402f",
".git/objects/be/7a6ca3cc501881f324052578e8e7dcb84c1512": "8e25b3130f8316c775e34a8a4578c42f",
".git/objects/be/643b5e0677f462b2f436ef2860cb50bff13611": "ed80c3c09de34ddc01307a24e004591d",
".git/objects/b3/302ca6d464f43562bbac8e9c1beb936adec3e5": "39f7f191fab1dabb39a5a97c0a1168bf",
".git/objects/df/755ac57d1f931c45e6c3e029c31e41a0fc895d": "2508211ee1674c75da309ee3a68227d4",
".git/objects/da/545f0390a2add91d7a1e9731ec66a11d54270e": "4c159367c963669805a9798b832cf6b9",
".git/objects/a2/7a24df7f352a7873b9a44c98544630ce00d383": "520ef4c3ef75865d9021f806ab0b9e9f",
".git/objects/a5/fddfa1ac68ea009c8efbc9d2ead7fc5977ffdc": "79b8ec829408f679f7d6cc308297e8b3",
".git/objects/a5/cbd35513216d7c203efe9b908f9fcb79c94d8b": "c708ec43aec0d1ae0e74f4ad22a1a099",
".git/objects/bd/e1378e1b7e395613c5db3c4a7126e9612c029f": "418302b19da3c80fceff180b4dae318f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f1d41215474c3cb0cee40c32fad4e56b1d6f6c": "78b56316f8f7878d6499857f451d5a7f",
".git/objects/bc/80b466d22ba46fcfa019770d92692f4dc0ad51": "716d637d1a7b3bc2475ba7b77dba2e14",
".git/objects/ae/0507b799aa628954f506377cbe79ca522969ff": "20e00ca2e0182b659e8eaacea66bbf8a",
".git/objects/ae/fd44daa3b76ee0ee91a8eb6d6d69835049d4e7": "fedcc1df518229f329cf2fad3fbf1d18",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/ff10d34c39a37c05d400089875b416ccf36af8": "a9e042ca0939d90bcf45f84b3a47173b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a6449a9ece5c5acecafc490b8a8342eaf4b02a": "f6d32fd377748fe6460d913eeb13dc42",
".git/objects/c9/d86910f84e824bd24fed0bf2671e7ce0d955b0": "e93053ee883fa40927469027d7bf6db6",
".git/objects/c9/8f1b3578a9aac803fb6ce3b3070fd707f99f71": "7c5b4e1cd95205d1b9668c499868a7c2",
".git/objects/fd/ef14f20dadefc68f6b08e1a8c192038ad1687f": "922110a0db8dd2dd51231489508c720c",
".git/objects/f2/9099bea669f812fd2012156fece24292962586": "94ccd9bf299746eee0f399eb1e86620e",
".git/objects/fe/457cd55c912377d161a2f68c77d53664ec4e31": "a785367c20d55cec05e37f5fc5708fd4",
".git/objects/fe/df31233f8e32c16aef8ff2b3ee9dc14e5c3902": "6a0c0d4b4b83ce946e83088fdada1bbf",
".git/objects/c8/685750e316eb270396f2754d6ef0f82c56da6f": "dfb3b81014b6f9ab12c80bd5f245e1a3",
".git/objects/fb/033e2a05696b8e3ed4028b40e0801722a8f6b1": "312a48acbf7bd9e57e8db47fb9df0cce",
".git/objects/fb/c83555ff35da381afa6aec3f2bb4fec935285a": "ce676f161fbba475dbcc8c0864903f50",
".git/objects/ec/2f5a3710aff9d91ab87cef46b2ea373d8c1cc3": "9d1e66220e960dd98c8936ca71ffd041",
".git/objects/ec/f3c759b1b9d4490b7fcae9ac15da67cca0a971": "b344ef8e2ce4e86faac9dcee0e40f8b2",
".git/objects/20/0f5413530d47a5c322050d3c876108fdbf9398": "f4cb7c1ddcc53eaab752258ac15aea39",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/301b849efad121df65763dbf09d999b93218a8": "91a73702ebd95128d57e31739a4f2feb",
".git/objects/27/1fbbcd7b42e6be953afbd7db8b13e25a274f18": "71f6dc68aba6d5b26f2c41594287ce37",
".git/objects/27/443b641573e848f4708a36405f4f26ee819c4b": "6a05b8270a46f6b6593826e89f54cc80",
".git/objects/11/48013fe85ca19fa68d585470d6add7ae969100": "eedcc7a1d7a484d941aef5497fd501e1",
".git/objects/16/4db77336f20dd29b5e2b43d4a4b22ba2f4710e": "1bc1764daf267b8f28a87d1a3c468906",
".git/objects/42/5a486bb849c00ec729d52ea2bc1db382948eeb": "ca8b54f8955f5a9b48d7937d3825f57d",
".git/objects/89/c4acc4d167217c0edfde39b41ad0b19cfb4185": "c966a1cf5d7ab527f35e96ab52edb7c9",
".git/objects/89/30485a8ea1b5eec86b29a94d5bdb23a9f34776": "21487a954445e1800a69de880714bdfc",
".git/objects/73/f005c55d18fcc643e8979df51027de3d7a13e0": "6253e53a0c19aa105e66c64bde613f18",
".git/objects/87/2eb00f955198c23f28ace57c7438c4b978c436": "0999af2fae74799bb4083fe0af5712d3",
".git/objects/80/9570ab17623d55894193e8d921a806e2e85b30": "47bb5b6be7e93a310e7fb36a694209e0",
".git/objects/1a/a018b6d348c757a77f70067304df8b567ed549": "99354e802ea088608a6a32abb5c23217",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/28/856213c2dd9a4ef66c2f908a20e12ddac77662": "5ed33b5681cc175d6cae2df9d91d68f9",
".git/objects/17/ef28be6e411d7ed1a52511029b5588d598e54c": "721d41b48f116abd5977f5637f6d1d21",
".git/objects/7b/28caa347b1720b94cd515790fc99a61e66898a": "a51f1d2cfaa5bbaacb08906870f090c4",
".git/objects/8f/2a186f13dd45078227b4afebb686201cb6b132": "8884222b66e108d3bf73e39ceeb81fb6",
".git/objects/8a/a47232ffb7fdb23ff03928e3ea3fd1943bab0e": "1ca4da01a8aa17eb6020054019b6ddce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/0b1f7d6d58c9979e4e0eb868ba8820d0f93e8d": "c58ee0b4209dfe493d3e101e6a6a7629",
".git/objects/4c/84aef4e8170e9db4c680be2d7c1df2eed0bf08": "5a48254258b1673345a671f9246ea088",
".git/objects/21/588a33b2efc9052066a7d3a9a9d695d625511c": "25cf32b428cdb34d5d2eb44dc510007a",
".git/objects/81/7cb1ecf0825d36a6a02892b2cf8f8586a01364": "0a069a1cd1b342dd628f35aae5bba3c4",
".git/objects/86/7c37a8841787d578cbc18392e9b3ca89c69fa0": "30bc518ae47abf43527193accaf8ec87",
".git/objects/72/bfce3c08aceed48e11c6936b08d9adadee0165": "51f34399a49bcc6eb484aa20f896714e",
".git/objects/2a/fb0f20f37c81974967f611e8a62d85f6d054a8": "0dd0b3cb004431d9a6af66270764252b",
".git/objects/2a/7d519dec8c4e0f64898167fad4574cc4648595": "8976cc95adce7ce392d0cfb44b43e806",
".git/objects/2f/8a93ab2d2da2e664e8d863a3a3ffc4ee65dfed": "6f81ef611b33ca134fd3a6fd02269edc",
".git/objects/2f/43516b9da9ce3e02642b685c3121430432055b": "38ff50e3a18388e9e255910837829aaa",
".git/objects/88/354eb03843f945ff2ecddfab6a85fb43941169": "82ed17a25743019fcc43e243d7e82e04",
".git/objects/88/e8f5514563d987a448e5ddc400c8201f2be6be": "b2b0c55eeaa63b3abb6baa29d938b067",
".git/objects/88/8cc93bae3ec41933d0618c891d4c394f27dec9": "067bc9ff6d143dbc2190698792dbf867",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/aedfe5e12e79bd225d4da50d7d2ebc9740aec7": "e5d4e422a229fc12c2392c2517de0a92",
".git/objects/07/e02485a2b78ec5cb4106d4a630c7cda82918dc": "28b52f6fa97841552e2732d52162d9ca",
".git/objects/07/0dee9b04a63617fd2bc69904db4c36ff0a8227": "9b85cf32e2799f63aac46d16131891e6",
".git/objects/00/d3072d68d2ebe4efa50f32e74956e3f3f398f0": "58cdc0ed703ecf6f099e5e93181d1d61",
".git/objects/6e/ca70880a58375e4b112d5e991c658b3c0dbb28": "2d9c3f1210d74413f4f7c2a2a5573ee5",
".git/objects/9a/78cd59381429a1bb595f9b022394806acca776": "1f173ab06fd5bc5c15316aa3c04ea438",
".git/objects/36/6369bc18a6b6c21e3792840690e3f7cb31c501": "3ab9e1c07f22665ce2ea720b04f5d55e",
".git/objects/36/ee0200f52e52b4d709f4a2fa580719548ff492": "6603f560fe6c90de531fc92bc53441e5",
".git/objects/5c/475b9f863970a26ea3ec5c7bc408cb9c16cebd": "42f08e42e5d0ae512b2e83272e5caed8",
".git/objects/5c/65457b4cb240530d36fe84cbbedde795f3951e": "dceeb3f5f8fe2eff11a9241632d01293",
".git/objects/09/e9ec381e3165fedc101e3fe6335ce0198dc60a": "611257b2667e0331c938001ee7b768c9",
".git/objects/5d/0ff8ded2a3f5acef530e5ca49439f25f33c070": "b0cc72db3a0c5f5087c9d204261a18cf",
".git/objects/62/e5b6956ef6f6ed68db38744744668d3430e4e9": "8b794b94c101c2a9d91035b7e714be2f",
".git/objects/62/312dc15fd4e10b11e2c9434b5c39c6233453ca": "e7de1c2b2e8a88b71ee3f3fdde678ce0",
".git/objects/96/d5537a4acba0a8a134550a583c72886e978a01": "d3763efd277ee8aa9268f45232f5c9a1",
".git/objects/98/9580f82e8ee040570e1eb321f75971e1249d57": "f7eee102237dcc1eb444b75d96b23302",
".git/objects/53/9834f458ab838c472f964a69167dcb3ddfd606": "aaa0672832bf9038c76563dbf32548d7",
".git/objects/53/0745b49178add4b6b807b784b3539fef541288": "371b3de9cca18ce0c6c2e13e12fd344c",
".git/objects/3f/97c584225a000ad08c7ad55bbc29aefe68737e": "a25253c7f18d855a368015b55e92caa5",
".git/objects/5e/2128a9cb96ecaa5781d9a8817efa72e8467cda": "a917f767bc186ed7e92afb7ebf232fe8",
".git/objects/5b/f5e144d25783c283c20abc34d87ccb974132f9": "0a127b201ed9c2430225867c7fd49284",
".git/objects/37/e5589195975a0610b72367dd39ef9aae2dd691": "5c7cd04a325436aa6378ba9f5543a4f0",
".git/objects/08/43e6460a70662c787cfb400f269c80875e473b": "b0ae113aec1bc8153403a0116cadc264",
".git/objects/01/f82b0b6ae0ef6f2bdf168b5280824d13b3a1c6": "3a3ccd2a73a32c1fe291b73ba5437999",
".git/objects/01/8efe023648ccb7e99fc3bd0484ce925194b9ea": "8b90f7538dfa03710dd18afe5bfccee9",
".git/objects/01/5548ef620ac4a00b1af98bc0939979d4cd8056": "204b001bb395009ce2b7cab0bfb6068c",
".git/objects/52/4fa8d384b83b661fcff968cb58711297f238d9": "21d2f1642481584b30c2740d0f088381",
".git/objects/97/e0c9fbaa907924744ff5b930f2da3963ff9c4e": "db6fbfe64af2dd88bd2218ca2c323d25",
".git/objects/0f/4555d9d2f5eeba57e6514b72b16435f6023a98": "457de9a241e4770beb0150dcc5c28135",
".git/objects/90/07963aa708cde4a2a6899bb54f077680935073": "13cbe37ea26e457f0ee1c0290a167457",
".git/objects/d3/a73cd22d3ed20812ad0ff7cb9b23889929b777": "675a9ee57a9661a1b0e54d48fa14d4e0",
".git/objects/d4/14185ab4517462dda5927c34dcb2c698b6fe05": "42025e57373bdcdc1c9a957c982d438f",
".git/objects/ba/83a0f8fa21ad7dab60f1b97c651392e702709a": "24f63723f38c3228d91ab176019b6494",
".git/objects/dd/bcf9ec8512b9a458418701317f6792b383cfc1": "8cc76b9536d19a520374d58d1484c68b",
".git/objects/a9/74c9a923e2b6f21e67214a17de168d683cfb0a": "aecdcf3f3865d3cf59fa259e5e047b18",
".git/objects/a9/ef94e0085657daf8bf905dee833dd51741da37": "ad3172312b506bb40c05d641459b8782",
".git/objects/a9/7c5a902c62894bd83ea5252dd4fc404795d0d8": "32d10a7b8e6b019b27bb44c56f4e1066",
".git/objects/d2/1d15b11c1ea262e49cb29fa70f4bc3da5a84ab": "ca9d21b4967ecc47902ab62f5c809af9",
".git/objects/af/d1ba837a0b2ed3387efd1bcea61836f53623a7": "c86f8792b929cd33ba2bce40da05a55f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/88e0c7bceffde34e17eef3c10117675e4197d5": "cf0ea161ad41f0111609e2aacaed7fea",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/bfc6018bbd0d5cc1c2a8484ade064fc0049410": "37b942be1dc68f82e2fcd9040abb2b05",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/eab2fa3b5e5e27b2a78ecc45233794c3ff54a3": "15809a2b8bd8f8002b7463e3c9018866",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/9329c56602ffb454e17ee7af3e5b310a3bb107": "14732673bfccc051ac0ccc60e1ae04b7",
".git/objects/ea/c439562c3a53cd212c72fa0534a078cc1ba8db": "149048ce20296b74e41599c96bda7e9b",
".git/objects/cd/de2c080fe12e307c627391a4e0589326ced863": "76425f7ab08122e9a47554b68ab7edbc",
".git/objects/cc/11a75d710e5ba6c75c2140e9d651611b1396f0": "71333f572f58bda64a3e2ca5d51c7f6e",
".git/objects/e6/d137ac2204189071ea6b1d909302fded583302": "0337dce1049d5efe4fb751f0dd834590",
".git/objects/f9/12e9cc24f25effc2efd235ae6f548a7cbb5296": "a64ab46527c8aecff7b78817bc414e16",
".git/objects/f7/261e7fa4d7a8e5f0db35d905b05373a9bd9f2c": "9b4e29b57dc16cd9054573ab4b2c1563",
".git/objects/fa/78d26097ad7fd995cda9c9c02ff3a4a0750f09": "60652e88df8146b9e0e37d7430dfbb7f",
".git/objects/f6/10632c139068e832c39c46eb9cecb6b2fd1238": "f41542665633ad61e3816d0e1feacd78",
".git/objects/e9/9bbb3da03109f169717211c7ac9c0108378bce": "1484702d849c1a56a1b34c747b300a2f",
".git/objects/e9/eda03b482a6efba25feb4a034b25e2e152b842": "cda3c9bf2e84b5dba73d1e1925b0c09b",
".git/objects/f1/32c2b5ed96a0db7bfad6bbe30456ebdc9b2b79": "904935042623a25ab6ee8108593a60a5",
".git/objects/e7/3a1dc3b3156a9676bdb597e299fbff0a241574": "77a4aa55d0aba82b515453fced0e4b5d",
".git/objects/f8/27f94e24fc158a341ea6a182bba66918a8f2b6": "df802e847affb76db919ae20fd280eb4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/53c23b616599c703e521b8045889b5670a6308": "f69ff0bd25cbbf51083cfaaa20d953ba",
".git/objects/2c/c1c0c19a93c455be53a2f4b52f789c8f591dba": "1883c2af18ebe0cee984c66fd6e29dd1",
".git/objects/79/82f326a26af75aec8c2b567db2fbef6cf95322": "d2267d025e4f652227780ed38ce5467c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/23cde3c4c83ea846a976968a13393e5e76845c": "3a632c3a9dafb726a277365854bdee95",
".git/objects/2d/eb52179bc3343c6de2c58a3792b08810a44d8c": "3b037edcbefa1847361488656288532d",
".git/objects/77/c97182617da560debdc5e6a76f04ce423c4056": "04d3e1f09c8edd43ae714c9e3cff1786",
".git/objects/1e/76d52f26e8f3f6833ee028d6c7d9926e522167": "639e58ea2aa10e7c90fd0dd48492e4f7",
".git/objects/84/017e281f2fb9d410ebf76115a0283b008af253": "2ee0826eee840862ffb8aad16aa32403",
".git/objects/84/e56856818f35ea4af20ddd7286becb023abfef": "7954c446486cb7fe4e5ef1dbbe1e1d9c",
".git/objects/12/eadc8ead45a5bb7cc49f463bb7e04b4eb7f83a": "884e7cf608980678eefe7e14c715dd6b",
".git/objects/8c/50b7dd38ae4e5cd9b5ff73366fa16b717f3954": "0ee16a6e99a36947192c5e666f8f4347",
".git/objects/71/1b2f514a33c7588828b500aa422239c982790c": "2c72a64fa03d1c90539e3aa9c9e95962",
".git/objects/49/8db7835d6dcf96446539983c5204e9b9e7dcea": "0fc8a7bca3d91f3b5677eacdef7ff34e",
".git/objects/40/b1a22291885231c8083d59ee4ab0f1661d9814": "7bb1bdd96fd431527d844ab45f748ae1",
".git/objects/2b/fac6e4177ab7f8b742fe63140237838556b93f": "a7c611cf28cfde5c1c3b74fe6f470972",
".git/objects/2b/3b9af43c318676acddf19606494784afac64a2": "279bbe1643963fbaa8a87229f865ceb9",
".git/objects/14/331aa565c306833971e4cdd1793d0cec87be5c": "f37d0d474f29052d74c09edabf9a1237",
".git/objects/14/489b8824014eec8a2200290559eda6a52fee08": "92d5d3c70d0db16cdc1246e984c0f944",
".git/objects/22/7bc247161b48842d4a9eff7c3e7b504c656aff": "6393973c7b6e8f50247545229922a6e3",
".git/HEAD": "fe1cff8f1501dcff0eb8afd40731b9ca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e47f1bd19f29e8c870bd509cad309055",
".git/logs/refs/heads/fbuild": "aef6fdc6da339be22f81063c8ace3f5c",
".git/logs/refs/heads/master": "e2403e724713f8c25e40acf45c7e52c2",
".git/logs/refs/remotes/origin/fbuild": "694323875540fd96af7fe53e9f32dcf7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/fbuild": "953fdf98009db891775b3c2af6415758",
".git/refs/heads/master": "08c0a713010b3b143980a1226785e5ca",
".git/refs/remotes/origin/fbuild": "953fdf98009db891775b3c2af6415758",
".git/index": "8c8123ccaf94f0d29c5c53264e76eba2",
".git/COMMIT_EDITMSG": "60b725f10c9c85c70d97880dfe8191b3",
".git/FETCH_HEAD": "d76379983cd1239bc2cbc559b07a1a09",
"assets/AssetManifest.json": "442cc73e5727e8d8ea94fc0ea3e5e4e3",
"assets/NOTICES": "ec675184c86faf9aec51ede1170a0192",
"assets/FontManifest.json": "b5679f4bce73145df921e49a15200bd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/logo.png": "ac53449a0a9ef1ab06f44b4d9a8d9265",
"assets/assets/images/bg.png": "39ca9ac613f87873c986ac4f9648ceea",
"assets/assets/fonts/HanyiSentyDiary.ttf": "27b27b9c98700946543b3b36cf7d633d",
"assets/assets/fonts/HanyiSentyMeadow.ttf": "dae78d3bb8f23401544d5b2ef8a1a6a2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
