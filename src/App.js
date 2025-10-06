1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
43;
44;
45;
46;
47;
48;
49;
50;
51;
52;
53;
54;
55;
56;
57;
58;
59;
60;
61;
62;
63;
64;
65;
66;
67;
68;
69;
70;
71;
72;
73;
74;
75;
76;
77;
78;
79;
80;
81;
82;
83;
84;
85;
86;
87;
88;
89;
90;
91;
92;
93;
94;
95;
96;
97;
98;
99;
100;
101;
102;
103;
104;
105;
106;
107;
108;
109;
110;
111;
112;
113;
114;
115;
116;
117;
118;
119;
120;
121;
122;
123;
124;
125;
126;
127;
128;
129;
130;
131;
132;
133;
134;
135;
136;
137;
138;
139;
140;
141;
142;
143;
144;
145;
146;
147;
148;
149;
150;
151;
152;
153;
154;
155;
156;
157;
158;
159;
160;
161;
162;
163;
164;
165;
166;
167;
168;
169;
170;
171;
172;
173;
174;
175;
176;
177;
178;
179;
180;
181;
182;
183;
184;
185;
186;
187;
188;
189;
190;
191;
192;
193;
194;
195;
196;
197;
198;
199;
200;
201;
202;
203;
204;
205;
206;
207;
208;
209;
210;
211;
212;
213;
214;
215;
216;
217;
218;
219;
220;
221;
222;
223;
224;
225;
226;
227;
228;
229;
230;
231;
232;
233;
234;
235;
236;
237;
238;
239;
240;
241;
242;
243;
244;
245;
246;
247;
248;
249;
250;
251;
252;
253;
254;
255;
256;
257;
258;
259;
260;
261;
262;
263;
264;
265;
266;
267;
268;
269;
270;
271;
272;
273;
274;
275;
276;
277;
278;
279;
280;
281;
282;
283;
284;
285;
286;
287;
288;
289;
290;
291;
292;
293;
294;
295;
296;
297;
298;
299;
300;
301;
302;
303;
304;
305;
306;
307;
308;
309;
310;
311;
312;
313;
314;
315;
316;
317;
318;
319;
320;
321;
322;
323;
324;
325;
326;
327;
328;
329;
330;
331;
332;
333;
334;
335;
336;
337;
338;
339;
340;
341;
342;
343;
344;
345;
346;
347;
348;
349;
350;
351;
352;
353;
354;
355;
356;
357;
358;
359;
360;
361;
362;
363;
364;
365;
366;
367;
368;
369;
370;
371;
372;
373;
374;
375;
376;
377;
378;
379;
380;
381;
382;
383;
384;
385;
386;
387;
388;
389;
390;
391;
392;
393;
394;
395;
396;
397;
398;
399;
400;
401;
402;
403;
404;
405;
406;
407;
408;
409;
410;
411;
412;
413;
414;
415;
416;
417;
418;
419;
420;
421;
422;
423;
424;
425;
426;
427;
428;
429;
430;
431;
432;
433;
434;
435;
436;
437;
438;
439;
440;
441;
442;
443;
444;
445;
446;
447;
448;
449;
450;
451;
452;
453;
454;
455;
456;
457;
458;
459;
460;
461;
462;
463;
464;
465;
466;
467;
468;
469;
470;
471;
472;
473;
474;
475;
476;
477;
478;
479;
480;
481;
482;
483;
484;
485;
486;
487;
488;
489;
490;
491;
492;
493;
494;
495;
496;
497;
498;
499;
500;
501;
502;
503;
504;
505;
506;
507;
508;
509;
510;
511;
512;
513;
514;
515;
516;
517;
518;
519;
520;
521;
522;
523;
524;
525;
526;
527;
528;
529;
530;
531;
532;
533;
534;
535;
536;
537;
538;
539;
540;
541;
542;
543;
544;
545;
546;
547;
548;
549;
550;
551;
552;
553;
554;
555;
556;
557;
558;
559;
560;
561;
562;
563;
564;
565;
566;
567;
568;
569;
570;
571;
572;
573;
574;
575;
576;
577;
578;
579;
580;
581;
582;
583;
584;
585;
586;
587;
588;
589;
590;
591;
592;
593;
594;
595;
596;
597;
598;
599;
600;
601;
602;
603;
604;
605;
606;
607;
608;
609;
610;
611;
612;
613;
614;
615;
616;
617;
618;
619;
620;
621;
622;
623;
624;
625;
626;
627;
628;
629;
630;
631;
632;
633;
634;
635;
636;
637;
638;
639;
640;
641;
642;
643;
644;
645;
646;
647;
648;
649;
650;
651;
652;
653;
654;
655;
656;
657;
658;
659;
660;
661;
662;
663;
664;
665;
666;
667;
668;
669;
670;
671;
672;
673;
674;
675;
676;
677;
678;
679;
680;
681;
682;
683;
684;
685;
686;
687;
688;
689;
690;
691;
692;
693;
694;
695;
696;
697;
698;
699;
700;
701;
702;
703;
704;
705;
706;
707;
708;
709;
710;
711;
712;
713;
714;
715;
716;
717;
718;
719;
720;
721;
722;
723;
724;
725;
726;
727;
728;
729;
730;
731;
732;
733;
734;
735;
736;
737;
738;
739;
740;
741;
742;
743;
744;
745;
746;
747;
748;
749;
750;
751;
752;
753;
754;
755;
756;
757;
758;
759;
760;
761;
762;
763;
764;
765;
766;
767;
768;
769;
770;
771;
772;
773;
774;
775;
776;
777;
778;
779;
780;
781;
782;
783;
784;
785;
786;
787;
788;
789;
790;
791;
792;
793;
794;
795;
796;
797;
798;
799;
800;
801;
802;
803;
804;
805;
806;
807;
808;
809;
810;
811;
812;
813;
814;
815;
816;
817;
818;
819;
820;
821;
822;
823;
824;
825;
826;
827;
828;
829;
830;
831;
832;
833;
834;
835;
836;
837;
838;
839;
840;
841;
842;
843;
844;
845;
846;
847;
848;
849;
850;
851;
852;
853;
854;
855;
856;
857;
858;
859;
860;
861;
862;
863;
864;
865;
866;
867;
868;
869;
870;
871;
872;
873;
874;
875;
876;
877;
878;
879;
880;
881;
882;
883;
884;
885;
886;
887;
888;
889;
890;
891;
892;
893;
894;
895;
896;
897;
898;
899;
900;
901;
902;
903;
904;
905;
906;
907;
908;
909;
910;
911;
912;
913;
914;
915;
916;
917;
918;
919;
920;
921;
922;
923;
924;
925;
926;
927;
928;
929;
930;
931;
932;
933;
934;
935;
936;
937;
938;
939;
940;
941;
942;
943;
944;
945;
946;
947;
948;
949;
950;
951;
952;
953;
954;
955;
956;
957;
958;
959;
960;
961;
962;
963;
964;
965;
966;
967;
968;
969;
970;
971;
972;
973;
974;
975;
976;
977;
978;
979;
980;
981;
982;
983;
984;
985;
986;
987;
988;
989;
990;
991;
992;
993;
994;
995;
996;
997;
998;
999;
1000;
1001;
1002;
1003;
1004;
1005;
1006;
1007;
1008;
1009;
1010;
1011;
1012;
1013;
1014;
1015;
1016;
1017;
1018;
1019;
1020;
1021;
1022;
1023;
1024;
1025;
1026;
1027;
1028;
1029;
1030;
1031;
1032;
1033;
1034;
1035;
1036;
1037;
1038;
1039;
1040;
1041;
1042;
1043;
1044;
1045;
1046;
1047;
1048;
1049;
1050;
1051;
1052;
1053;
1054;
1055;
1056;
1057;
1058;
1059;
1060;
1061;
1062;
1063;
1064;
1065;
1066;
1067;
1068;
1069;
1070;
1071;
1072;
1073;
1074;
1075;
1076;
1077;
1078;
1079;
1080;
1081;
1082;
1083;
1084;
1085;
1086;
1087;
1088;
1089;
1090;
1091;
1092;
1093;
1094;
1095;
1096;
1097;
1098;
1099;
1100;
1101;
1102;
1103;
1104;
1105;
1106;
1107;
1108;
1109;
1110;
1111;
1112;
1113;
1114;
1115;
1116;
1117;
1118;
1119;
1120;
1121;
1122;
1123;
1124;
1125;
1126;
1127;
1128;
1129;
1130;
1131;
1132;
1133;
1134;
1135;
1136;
1137;
1138;
1139;
1140;
1141;
1142;
1143;
1144;
1145;
1146;
1147;
1148;
1149;
1150;
1151;
1152;
1153;
1154;
1155;
1156;
1157;
1158;
1159;
1160;
1161;
1162;
1163;
1164;
1165;
1166;
1167;
1168;
1169;
1170;
1171;
1172;
1173;
1174;
1175;
1176;
1177;
1178;
1179;
1180;
1181;
1182;
1183;
1184;
1185;
1186;
1187;
1188;
1189;
1190;
1191;
1192;
1193;
1194;
1195;
1196;
1197;
1198;
1199;
1200;
1201;
1202;
1203;
1204;
1205;
1206;
1207;
1208;
1209;
1210;
1211;
1212;
1213;
1214;
1215;
1216;
1217;
1218;
1219;
1220;
1221;
1222;
1223;
1224;
1225;
1226;
1227;
1228;
1229;
1230;
1231;
1232;
1233;
1234;
1235;
1236;
1237;
1238;
1239;
1240;
1241;
1242;
1243;
1244;
1245;
1246;
1247;
1248;
1249;
1250;
1251;
1252;
1253;
1254;
1255;
1256;
1257;
1258;
1259;
1260;
1261;
1262;
1263;
1264;
1265;
1266;
1267;
1268;
1269;
1270;
1271;
1272;
1273;
1274;
1275;
1276;
1277;
1278;
1279;
1280;
1281;
1282;
1283;
1284;
1285;
1286;
1287;
1288;
1289;
1290;
1291;
1292;
1293;
1294;
1295;
1296;
1297;
1298;
1299;
1300;
1301;
1302;
1303;
1304;
1305;
1306;
1307;
1308;
1309;
1310;
1311;
1312;
1313;
1314;
1315;
1316;
1317;
1318;
1319;
1320;
1321;
1322;
1323;
1324;
1325;
1326;
1327;
1328;
1329;
1330;
1331;
1332;
1333;
1334;
1335;
1336;
1337;
1338;
1339;
1340;
1341;
1342;
1343;
1344;
1345;
1346;
1347;
1348;
1349;
1350;
1351;
1352;
1353;
1354;
1355;
1356;
1357;
1358;
1359;
1360;
1361;
1362;
1363;
1364;
1365;
1366;
1367;
1368;
1369;
1370;
1371;
1372;
1373;
1374;
1375;
1376;
1377;
1378;
1379;
1380;
1381;
1382;
1383;
1384;
1385;
1386;
1387;
1388;
1389;
1390;
1391;
1392;
1393;
1394;
1395;
1396;
1397;
1398;
1399;
1400;
1401;
1402;
1403;
1404;
1405;
1406;
1407;
1408;
1409;
1410;
1411;
1412;
1413;
1414;
1415;
1416;
1417;
1418;
1419;
1420;
1421;
1422;
1423;
1424;
1425;
1426;
1427;
1428;
1429;
1430;
1431;
1432;
1433;
1434;
1435;
1436;
1437;
1438;
1439;
1440;
1441;
1442;
1443;
1444;
1445;
1446;
1447;
1448;
1449;
1450;
1451;
1452;
1453;
1454;
1455;
1456;
1457;
1458;
1459;
1460;
1461;
1462;
1463;
1464;
1465;
1466;
1467;
1468;
1469;
1470;
1471;
1472;
1473;
1474;
1475;
1476;
1477;
1478;
1479;
1480;
1481;
1482;
1483;
1484;
1485;
1486;
1487;
1488;
1489;
1490;
1491;
1492;
1493;
1494;
1495;
1496;
1497;
1498;
1499;
1500;
1501;
1502;
1503;
1504;
1505;
1506;
1507;
1508;
1509;
1510;
1511;
1512;
1513;
1514;
1515;
1516;
1517;
1518;
1519;
1520;
1521;
1522;
1523;
1524;
1525;
1526;
1527;
1528;
1529;
1530;
1531;
1532;
1533;
1534;
1535;
1536;
1537;
1538;
1539;
1540;
1541;
1542;
1543;
1544;
1545;
1546;
1547;
1548;
1549;
1550;
import React, { useState, useEffect } from "react";
import {
  Heart,
  Lightbulb,
  BookOpen,
  Compass,
  Crown,
  Gift,
  CreditCard,
  Settings,
  BarChart3,
  Users,
  Mail,
  MapPin,
  User,
  Bell,
  Send,
  Database,
} from "lucide-react";

const NudgeApp = () => {
  const appName = "Peace Harbor";

  const [mood, setMood] = useState("");
  const [guidance, setGuidance] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [subscriptionTier, setSubscriptionTier] = useState("free");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showBackOffice, setShowBackOffice] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);
  const [showEmailCenter, setShowEmailCenter] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [dailyEncouragement, setDailyEncouragement] = useState(null);
  const [dailyUsed, setDailyUsed] = useState(false);

  const [userAccount, setUserAccount] = useState(null);
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    city: "",
    state: "",
    acceptedTerms: false,
  });

  const [emailPreferences, setEmailPreferences] = useState({
    announcements: true,
    appUpdates: true,
    localEvents: true,
  });

  const [emailCampaign, setEmailCampaign] = useState({
    type: "announcements",
    subject: "",
    message: "",
    targetLocation: "all",
  });

  const backOfficeData = {
    totalUsers: 1247,
    freeUsers: 892,
    premiumUsers: 355,
    monthlyRevenue: 2125.45,
    dailyActiveUsers: 423,
    conversionRate: 28.5,
    emailDatabase: 1189,
    announcementSubscribers: 1089,
    updateSubscribers: 945,
    localEventSubscribers: 756,
  };

  const sampleUsers = [
    {
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      city: "Atlanta",
      state: "GA",
      tier: "complete",
    },
    {
      name: "Marcus Williams",
      email: "marcus.w@email.com",
      city: "Chicago",
      state: "IL",
      tier: "free",
    },
    {
      name: "Elena Rodriguez",
      email: "elena.r@email.com",
      city: "Austin",
      state: "TX",
      tier: "complete",
    },
    {
      name: "David Chen",
      email: "david.c@email.com",
      city: "Seattle",
      state: "WA",
      tier: "free",
    },
    {
      name: "Aisha Patel",
      email: "aisha.p@email.com",
      city: "Miami",
      state: "FL",
      tier: "complete",
    },
  ];

  const spiritualTexts = {
    sadness: [
      {
        source: "Bible",
        text: "Weeping may endure for a night, but joy comes in the morning. - Psalm 30:5",
      },
      {
        source: "Quran",
        text: "And whoever fears Allah - He will make for him a way out. - Quran 65:2",
      },
      {
        source: "Buddhist",
        text: "Pain is inevitable, suffering is optional. - Buddha",
      },
      {
        source: "Hindu",
        text: "Even a man who is pure in heart may know seasons of sadness. - Bhagavad Gita",
      },
      {
        source: "African Proverb",
        text: "The tear that falls teaches the eye not to cry. - African Wisdom",
      },
      {
        source: "Native American",
        text: "Listen to the wind; it talks. Listen to the silence; it speaks. Listen to your heart; it knows. - Native Wisdom",
      },
    ],
    grief: [
      {
        source: "Bible",
        text: "Blessed are those who mourn, for they will be comforted. - Matthew 5:4",
      },
      {
        source: "Quran",
        text: "And give good tidings to the patient, who, when disaster strikes them, say, 'Indeed we belong to Allah, and indeed to Him we will return.' - Quran 2:155-156",
      },
      {
        source: "Buddhist",
        text: "Grief can be the garden of compassion. If you keep your heart open through everything, your pain can become your greatest ally. - Rumi",
      },
      {
        source: "Hindu",
        text: "For the soul there is neither birth nor death. It is not slain when the body is slain. - Bhagavad Gita",
      },
      {
        source: "African Proverb",
        text: "When the roots of a tree begin to decay, it spreads death to the branches. But new growth can emerge from deep roots. - African Wisdom",
      },
      {
        source: "Celtic",
        text: "Death is not extinguishing the light; it is only putting out the lamp because the dawn has come. - Celtic Wisdom",
      },
    ],
    anger: [
      {
        source: "Bible",
        text: "In your anger do not sin: Do not let the sun go down while you are still angry. - Ephesians 4:26",
      },
      {
        source: "Quran",
        text: "But whoever forgives and makes reconciliation, his reward is with Allah. - Quran 42:40",
      },
      {
        source: "Buddhist",
        text: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned. - Buddha",
      },
      {
        source: "Hindu",
        text: "Anger is the enemy of the soul. From anger comes delusion, from delusion comes loss of memory. - Bhagavad Gita",
      },
      {
        source: "African Proverb",
        text: "When you are angry, you are one letter short of danger. - African Wisdom",
      },
      {
        source: "Tao Te Ching",
        text: "The best fighter is never angry. - Lao Tzu",
      },
    ],
    disappointment: [
      {
        source: "Bible",
        text: "Hope deferred makes the heart sick, but a longing fulfilled is a tree of life. - Proverbs 13:12",
      },
      {
        source: "Quran",
        text: "And it is He who sends down rain after [people] have despaired and spreads His mercy. - Quran 42:28",
      },
      {
        source: "Buddhist",
        text: "If you are disappointed, that means you were expecting something. Let go of expectations and be free. - Buddha",
      },
      {
        source: "Hindu",
        text: "You have the right to work, but never to the fruit of work. Disappointment comes from attachment to outcomes. - Bhagavad Gita",
      },
      {
        source: "African Proverb",
        text: "Even the mightiest eagle comes down to the treetops to rest. - African Wisdom",
      },
      {
        source: "Stoic",
        text: "Don't demand that things happen as you wish. Wish that they happen as they do, and you will go on well. - Epictetus",
      },
    ],
    sorrow: [
      {
        source: "Bible",
        text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit. - Psalm 34:18",
      },
      {
        source: "Quran",
        text: "And whoever relies upon Allah - then He is sufficient for him. - Quran 65:3",
      },
      {
        source: "Buddhist",
        text: "Every experience, no matter how bad it seems, holds within it a blessing of some kind. The goal is to find it. - Buddha",
      },
      {
        source: "Hindu",
        text: "The soul is neither born, and nor does it die. Sorrow touches only the temporary. - Bhagavad Gita",
      },
      {
        source: "African Proverb",
        text: "Rain beats a leopard's skin, but it does not wash out the spots. Sorrow will pass, but strength remains. - African Wisdom",
      },
      {
        source: "Sufi",
        text: "Sorrow prepares you for joy. It violently sweeps everything out of your house, so that new joy can find space to enter. - Rumi",
      },
    ],
    anxiousness: [
      {
        source: "Bible",
        text: "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God. - Philippians 4:6",
      },
      {
        source: "Quran",
        text: "Unquestionably, by the remembrance of Allah hearts are assured. - Quran 13:28",
      },
      {
        source: "Buddhist",
        text: "If you want to know your mind, sit down and observe it. Anxiety is just clouds passing through the sky of awareness. - Buddha",
      },
      {
        source: "Hindu",
        text: "When the mind is restless, it can be calmed through practice and detachment. - Bhagavad Gita",
      },
      {
        source: "African Proverb",
        text: "Worry is like a rocking chair: it gives you something to do but doesn't get you anywhere. - African Wisdom",
      },
      {
        source: "Native American",
        text: "Worry is a prayer for something you don't want. - Lakota Saying",
      },
    ],
    panic: [
      {
        source: "Bible",
        text: "When I am afraid, I put my trust in you. In God, whose word I praise. - Psalm 56:3-4",
      },
      {
        source: "Quran",
        text: "And whoever fears Allah - He will make for him a way out. - Quran 65:2",
      },
      {
        source: "Buddhist",
        text: "Breathe in peace, breathe out fear. This moment is all there is. - Buddha",
      },
      {
        source: "Hindu",
        text: "In the depths of meditation, the mind becomes still like a lake without ripples. - Bhagavad Gita",
      },
      {
        source: "African Proverb",
        text: "When the spider webs unite, they can tie up a lion. But first, the spider must be still. - African Wisdom",
      },
      {
        source: "Stoic",
        text: "You have power over your mind - not outside events. Realize this, and you will find strength. - Marcus Aurelius",
      },
    ],
    suspiciousness: [
      {
        source: "Bible",
        text: "Above all else, guard your heart, for everything you do flows from it. But let wisdom guide your discernment. - Proverbs 4:23",
      },
      {
        source: "Quran",
        text: "O you who believe! Avoid much suspicion, indeed some suspicions are sins. - Quran 49:12",
      },
      {
        source: "Buddhist",
        text: "Three things cannot be long hidden: the sun, the moon, and the truth. Trust in truth. - Buddha",
      },
      {
        source: "Hindu",
        text: "When the mind is disturbed by doubt, seek wisdom in stillness and clarity will come. - Bhagavad Gita",
      },
      {
        source: "African Proverb",
        text: "He who is bitten by a snake fears a lizard. But wisdom knows the difference. - African Wisdom",
      },
      {
        source: "Confucian",
        text: "The cautious seldom err, but suspicion without cause brings its own suffering. - Confucius",
      },
    ],
    vengeance: [
      {
        source: "Bible",
        text: "Do not take revenge, my dear friends, but leave room for God's wrath, for it is written: 'It is mine to avenge; I will repay,' says the Lord. - Romans 12:19",
      },
      {
        source: "Quran",
        text: "The recompense for an evil is an evil equal thereto; but whoever forgives and makes reconciliation, his reward is with Allah. - Quran 42:40",
      },
      {
        source: "Buddhist",
        text: "Hatred does not cease by hatred, but only by love; this is the eternal rule. - Buddha",
      },
      {
        source: "Hindu",
        text: "Anger and revenge are two-faced. They promise satisfaction but deliver only more suffering. - Bhagavad Gita",
      },
      {
        source: "African Proverb",
        text: "When you dig a grave for your enemy, dig two - one for yourself. - African Wisdom",
      },
      {
        source: "Confucian",
        text: "Before you embark on a journey of revenge, dig two graves. - Confucius",
      },
    ],
    encouraging: [
      {
        source: "Bible",
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. - Joshua 1:9",
      },
      {
        source: "Quran",
        text: "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. - Quran 65:3",
      },
      {
        source: "Baháʼí",
        text: "The light of a good character surpasseth the light of the sun. - Baháʼí Writings",
      },
      {
        source: "Hindu",
        text: "You have the right to work, but never to the fruit of work. - Bhagavad Gita",
      },
      {
        source: "African Proverb",
        text: "When the roots of a tree begin to decay, it spreads death to the branches. - African Wisdom",
      },
      {
        source: "Buddhist",
        text: "Peace comes from within. Do not seek it without. - Buddha",
      },
    ],
    challenging: [
      {
        source: "Bible",
        text: "Cast all your anxiety on him because he cares for you. - 1 Peter 5:7",
      },
      {
        source: "Quran",
        text: "And it is He who created the heavens and earth in truth. And the day He says, 'Be,' and it is, His word is the truth. - Quran 6:73",
      },
      {
        source: "Baháʼí",
        text: "Sorrow not if, in these days and on this earthly plane, things contrary to your wishes have been ordained. - Baháʼí Writings",
      },
      {
        source: "Hindu",
        text: "The mind is restless and difficult to restrain, but it is subdued by practice. - Bhagavad Gita",
      },
      {
        source: "African Proverb",
        text: "Smooth seas do not make skillful sailors. - African Wisdom",
      },
      {
        source: "Tao Te Ching",
        text: "The sage is guided by what he feels and not by what he sees. - Lao Tzu",
      },
    ],
  };

  const saveToGoogleSheets = async (userData) => {
    const sheetData = {
      timestamp: new Date().toISOString(),
      name: userData.name,
      email: userData.email,
      city: userData.city,
      state: userData.state,
      subscriptionTier: userData.subscriptionTier || "free",
      announcements: userData.emailPreferences?.announcements || false,
      appUpdates: userData.emailPreferences?.appUpdates || false,
      localEvents: userData.emailPreferences?.localEvents || false,
    };

    console.log("Saving to Google Sheets:", sheetData);
    return { success: true, data: sheetData };
  };

  const generateDailyEncouragement = () => {
    const allCategories = [
      "encouraging",
      "sadness",
      "grief",
      "anger",
      "disappointment",
      "sorrow",
      "anxiousness",
      "panic",
      "suspiciousness",
      "vengeance",
    ];
    const randomCategory =
      allCategories[Math.floor(Math.random() * allCategories.length)];
    const categoryTexts =
      spiritualTexts[randomCategory] || spiritualTexts.encouraging;
    const randomText =
      categoryTexts[Math.floor(Math.random() * categoryTexts.length)];

    return {
      ...randomText,
      kennieMessage:
        "Here's your daily dose of wisdom and encouragement from the spiritual traditions I've studied across the world. Take a moment to breathe with these words and let them guide your steps today. Remember, you carry within you the strength of all who came before you.",
    };
  };

  const detectEmotion = (moodText) => {
    const moodLower = moodText.toLowerCase();

    if (moodLower.includes("sad") || moodLower.includes("sadness"))
      return "sadness";
    if (
      moodLower.includes("grief") ||
      moodLower.includes("grieving") ||
      moodLower.includes("loss")
    )
      return "grief";
    if (
      moodLower.includes("angry") ||
      moodLower.includes("anger") ||
      moodLower.includes("furious") ||
      moodLower.includes("mad")
    )
      return "anger";
    if (
      moodLower.includes("disappointed") ||
      moodLower.includes("disappointment") ||
      moodLower.includes("let down")
    )
      return "disappointment";
    if (
      moodLower.includes("sorrow") ||
      moodLower.includes("sorrowful") ||
      moodLower.includes("mournful")
    )
      return "sorrow";
    if (
      moodLower.includes("anxious") ||
      moodLower.includes("anxiety") ||
      moodLower.includes("worried") ||
      moodLower.includes("nervous")
    )
      return "anxiousness";
    if (
      moodLower.includes("panic") ||
      moodLower.includes("panicked") ||
      moodLower.includes("overwhelmed")
    )
      return "panic";
    if (
      moodLower.includes("suspicious") ||
      moodLower.includes("doubt") ||
      moodLower.includes("mistrust")
    )
      return "suspiciousness";
    if (
      moodLower.includes("vengeful") ||
      moodLower.includes("revenge") ||
      moodLower.includes("vengeance") ||
      moodLower.includes("bitter")
    )
      return "vengeance";

    return null;
  };

  useEffect(() => {
    const existingUser = localStorage.getItem("soulStepsUser");
    if (existingUser) {
      setUserAccount(JSON.parse(existingUser));
      setShowSignUp(false);
    }

    if (!dailyEncouragement) {
      setDailyEncouragement(generateDailyEncouragement());
    }
  }, [dailyEncouragement]);

  const handleSignUp = async () => {
    if (
      signUpForm.name &&
      signUpForm.email &&
      signUpForm.city &&
      signUpForm.state &&
      signUpForm.acceptedTerms
    ) {
      const newUser = {
        ...signUpForm,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        subscriptionTier: "free",
        emailPreferences: emailPreferences,
      };

      try {
        await saveToGoogleSheets(newUser);
        console.log("User data saved to Google Sheets successfully");
      } catch (error) {
        console.error("Error saving to Google Sheets:", error);
      }

      localStorage.setItem("soulStepsUser", JSON.stringify(newUser));
      setUserAccount(newUser);
      setShowSignUp(false);
    }
  };

  const generateGuidance = (userMood) => {
    const moodLower = userMood.toLowerCase();
    const specificEmotion = detectEmotion(userMood);
    let emotionCategory = "challenging";

    const challengingWords = [
      "sad",
      "angry",
      "anxious",
      "worried",
      "stressed",
      "depressed",
      "overwhelmed",
      "frustrated",
      "lonely",
      "hopeless",
      "tired",
      "afraid",
      "hurt",
      "disappointed",
      "confused",
      "grief",
      "sorrow",
      "panic",
      "suspicious",
      "vengeful",
    ];
    const encouragingWords = [
      "happy",
      "joyful",
      "grateful",
      "blessed",
      "peaceful",
      "calm",
      "excited",
      "hopeful",
      "confident",
      "loved",
      "content",
      "proud",
      "inspired",
    ];

    const isChallengingMood = challengingWords.some((word) =>
      moodLower.includes(word)
    );
    const isEncouragingMood = encouragingWords.some((word) =>
      moodLower.includes(word)
    );

    if (isEncouragingMood) emotionCategory = "encouraging";

    let selectedTexts = [];

    if (subscriptionTier === "complete") {
      if (specificEmotion && spiritualTexts[specificEmotion]) {
        selectedTexts = spiritualTexts[specificEmotion];
      } else {
        selectedTexts = spiritualTexts[emotionCategory];
      }
    } else {
      const relevantTexts =
        specificEmotion && spiritualTexts[specificEmotion]
          ? spiritualTexts[specificEmotion]
          : spiritualTexts[emotionCategory];
      selectedTexts = [
        relevantTexts[Math.floor(Math.random() * relevantTexts.length)],
      ];
    }

    let steps = [];
    let approaches = [];

    if (isChallengingMood || specificEmotion) {
      steps = [
        {
          title: "Acknowledge & Accept (Mindfulness + ACT)",
          action: `Take 3 deep breaths. Place your hand on your heart and say: 'I see you, ${userMood}. I acknowledge this feeling without judgment. You're here for a reason, and that's okay.'`,
          rationale:
            "Acceptance transforms resistance into presence, creating space for authentic healing to begin.",
        },
        {
          title: "Ground Yourself (CBT + Somatic Therapy)",
          action:
            "Feel your feet on the ground. Name 5 things you see, 4 you hear, 3 you touch, 2 you smell, 1 you taste. Then breathe into your belly and ask: 'What does my body need right now?'",
          rationale:
            "Grounding activates your parasympathetic nervous system, moving you from reactive to responsive states.",
        },
        {
          title: "Reframe with Compassion (CBT + Self-Compassion)",
          action: `Write down what you're telling yourself about feeling ${userMood}. Then rewrite it as you would speak to a beloved friend facing the same struggle. What would love say?`,
          rationale:
            "Self-compassion rewrites your internal narrative, shifting from self-criticism to self-kindness and healing.",
        },
        {
          title: "Take Meaningful Action (Solution-Focused + Values-Based)",
          action:
            "Ask yourself: 'What's one small action that honors both my feelings and my values?' Choose something that brings you 1% closer to who you want to be, and do it within the hour.",
          rationale:
            "Purpose-driven action creates forward momentum while honoring your emotional experience.",
        },
        {
          title: "Connect & Process (Relational + Narrative Therapy)",
          action:
            "Reach out to someone who makes you feel seen, OR journal about what this feeling might be teaching you. Ask: 'What story am I living, and what story do I want to create?'",
          rationale:
            "Connection and meaning-making help process difficult emotions and integrate wisdom from challenging experiences.",
        },
      ];

      if (subscriptionTier === "complete") {
        steps.push({
          title:
            "Rewire for Resilience (Neuroplasticity + Positive Psychology)",
          action:
            "Spend 5 minutes in 'neural rewiring': Visualize yourself handling this emotion with grace and wisdom. Feel the emotions in your body as you imagine responding differently. Practice a new neural pathway: breathe, pause, choose your response. End by saying: 'I am creating new patterns of resilience.'",
          rationale:
            "Neuroplasticity research shows that visualization and positive emotion create new neural pathways. This practice literally rewires your brain for greater emotional resilience and adaptive responses.",
        });
      }

      approaches =
        subscriptionTier === "complete"
          ? [
              "Mindfulness",
              "ACT",
              "CBT",
              "Somatic Therapy",
              "Self-Compassion",
              "Solution-Focused",
              "Relational Therapy",
              "Narrative Therapy",
              "Neuroplasticity",
              "Positive Psychology",
            ]
          : ["Mindfulness", "ACT", "CBT", "Somatic Therapy", "Self-Compassion"];
    } else {
      steps = [
        {
          title: "Amplify & Savor (Positive Psychology)",
          action: `Take a moment to fully inhabit this feeling of ${userMood}. Notice how it feels in your body, what thoughts arise, and what made this possible. Breathe into the goodness.`,
          rationale:
            "Savoring positive emotions builds psychological capital and creates lasting neural pathways for well-being.",
        },
        {
          title:
            "Express Gratitude (Spiritually-Informed + Positive Psychology)",
          action:
            "Write down 3 specific things you're grateful for right now - one about yourself, one about others, one about your circumstances. Feel the appreciation in your heart.",
          rationale:
            "Gratitude amplifies positive emotions and creates an upward spiral of well-being and connection.",
        },
        {
          title: "Share the Gift (Person-Centered + Culturally Responsive)",
          action:
            "Share this positive feeling with someone - call a friend, send a message, or do something kind for another person. Let your joy multiply.",
          rationale:
            "Sharing positive emotions strengthens relationships and multiplies joy for both giver and receiver.",
        },
        {
          title: "Build on Success (Solution-Focused + Strengths-Based)",
          action:
            "Identify what you did or what happened that contributed to feeling this way. How can you intentionally create more opportunities for this experience?",
          rationale:
            "Understanding what works helps you intentionally cultivate more positive experiences and build on your strengths.",
        },
        {
          title: "Set Intentions (Existential + Values-Based)",
          action:
            "While feeling this positive energy, set one meaningful intention for how you want to show up in the world this week. Let this feeling guide your purpose.",
          rationale:
            "Positive emotions provide clarity about values and energize pursuit of meaningful goals.",
        },
      ];

      if (subscriptionTier === "complete") {
        steps.push({
          title:
            "Encode for Future Access (Neuroplasticity + Memory Consolidation)",
          action:
            "Create a 'joy anchor': Close your eyes and fully experience this positive feeling. Create a simple gesture (like touching your heart) while feeling this emotion. Repeat 3 times. This creates a neural pathway you can access later by using the same gesture.",
          rationale:
            "Neuroplasticity allows us to encode positive emotional states and create accessible pathways to resilience. This technique builds emotional resources you can draw upon during challenging times.",
        });
      }

      approaches =
        subscriptionTier === "complete"
          ? [
              "Positive Psychology",
              "Person-Centered",
              "Culturally Responsive",
              "Solution-Focused",
              "Strengths-Based",
              "Existential",
              "Values-Based",
              "Neuroplasticity",
              "Memory Consolidation",
            ]
          : [
              "Positive Psychology",
              "Person-Centered",
              "Solution-Focused",
              "Existential",
            ];
    }

    let kennieMessage = "";

    if (specificEmotion) {
      const emotionResponses = {
        sadness: `Hello ${
          userAccount?.name || "dear one"
        }, I can feel the weight of sadness you're carrying right now. Sadness is not a sign of weakness - it's the heart's way of honoring what matters to you. Sadness often carries profound wisdom about our values, our losses, and our capacity for love. Let's honor this feeling together and find gentle ways to move through it.`,
        grief: `${
          userAccount?.name || "Beloved friend"
        }, grief is love with nowhere to go, and the depth of your grief speaks to the depth of your love. What you're experiencing is sacred - it's the price we pay for having deeply cared. Grief doesn't follow timelines or rules; it flows like water, sometimes gentle, sometimes overwhelming. I'm here to walk with you through this valley, honoring both your loss and your resilience.`,
        anger: `${
          userAccount?.name || "Dear one"
        }, I hear the fire of anger in your words, and I want you to know that anger is often a guardian emotion - it speaks up when our boundaries have been crossed or our values violated. Your anger has something important to tell us. Let's listen to its message while finding healthy ways to express and channel this powerful energy. You're not bad for feeling angry; you're human.`,
        disappointment: `Hello ${
          userAccount?.name || "friend"
        }, disappointment is the gap between what we hoped for and what came to be. It's painful because it often reflects how much we dared to care, to hope, to invest ourselves in something meaningful. Your disappointment honors the dreams you carried. Let's tend to this tender feeling and explore how to rebuild hope while honoring your very real sense of loss.`,
        sorrow: `${
          userAccount?.name || "Gentle soul"
        }, sorrow runs deep, like an underground river that touches the depths of who we are. It's different from sadness - sorrow often carries a spiritual weight, a recognition of life's profound mysteries and losses. In many traditions, sorrow is seen as a doorway to wisdom and compassion. Let's explore what your sorrow might be teaching you about the preciousness of life and love.`,
        anxiousness: `Dear ${
          userAccount?.name || "one"
        }, anxiety is your mind's attempt to protect you by preparing for every possible threat. It's exhausting because your nervous system is working overtime trying to keep you safe. What you're experiencing is your body's ancient wisdom responding to modern pressures. Let's help your nervous system remember that you're safe right now, and give you tools to find calm in the storm.`,
        panic: `${
          userAccount?.name || "Brave soul"
        }, panic feels like drowning in air, like your body has forgotten how to just be. What you're experiencing is real and terrifying, but I want you to know: this will pass. Panic is your nervous system's fire alarm going off, but you are not in actual danger right now. Let's focus on bringing you back to the present moment, back to your breath, back to safety.`,
        suspiciousness: `Hello ${
          userAccount?.name || "careful one"
        }, suspicion often grows from past betrayals or current uncertainties. Your vigilance may have protected you before, but it's also exhausting to live on high alert. Trust and discernment can coexist - you can be wise about who you trust while not closing your heart entirely. Let's explore how to honor your need for safety while remaining open to authentic connection.`,
        vengeance: `${
          userAccount?.name || "Hurting soul"
        }, the desire for vengeance speaks to a deep wound that's crying out for justice and acknowledgment. Someone or something has harmed you, and your spirit is demanding that this wrong be made right. This is understandable and human. But vengeance, while temporarily satisfying, often binds us to our pain. Let's explore healthier ways to seek justice and reclaim your power.`,
      };

      kennieMessage = emotionResponses[specificEmotion];
    } else if (isChallengingMood) {
      kennieMessage = `Hello ${
        userAccount?.name || "dear friend"
      }, I hear you, and I want you to know that feeling ${userMood} is a natural part of the human experience. Our most difficult moments often carry the seeds of our greatest growth and wisdom. You're not broken - you're beautifully, courageously human. Let's work through this together with gentle, proven approaches that honor both modern psychology and ancient wisdom.`;
    } else {
      kennieMessage = `Hello ${
        userAccount?.name || "beautiful soul"
      }, what a gift to witness you feeling ${userMood}! Positive emotions like these are not just personal experiences - they're gifts that can nourish not just ourselves, but our entire community. Your joy is medicine for a hurting world. Let's explore how to honor this moment and let it strengthen your spirit even more deeply.`;
    }

    return {
      mood: userMood,
      specificEmotion,
      isChallengingMood: isChallengingMood || !!specificEmotion,
      steps,
      approaches,
      spiritualWisdom: selectedTexts,
      kennieMessage,
    };
  };

  const handleSubmit = () => {
    if (subscriptionTier === "free" && dailyUsed) {
      setShowPaymentModal(true);
      return;
    }

    if (mood.trim()) {
      const specificEmotion = detectEmotion(mood.trim());

      if (subscriptionTier === "free") {
        setDailyUsed(true);
        const specificTexts =
          specificEmotion && spiritualTexts[specificEmotion]
            ? spiritualTexts[specificEmotion]
            : spiritualTexts.encouraging;
        const randomWisdom =
          specificTexts[Math.floor(Math.random() * specificTexts.length)];

        const encouragement = {
          ...randomWisdom,
          kennieMessage: `Hello ${
            userAccount?.name || "friend"
          }, as a ${appName} Lite user, here's your daily encouragement drawn from the wisdom traditions I've studied worldwide. ${
            specificEmotion
              ? `I sense you're experiencing ${mood}, and this wisdom speaks to that feeling.`
              : ""
          } For my complete guidance with personalized step-by-step support, consider upgrading to ${appName} Complete.`,
        };

        setGuidance({
          mood: mood.trim(),
          spiritualWisdom: [encouragement],
          kennieMessage: encouragement.kennieMessage,
          steps: [],
          isFreeTier: true,
          specificEmotion,
        });
      } else {
        const newGuidance = generateGuidance(mood.trim());
        setGuidance(newGuidance);
      }
      setCurrentStep(0);
    }
  };

  const handleUpgrade = () => {
    setSubscriptionTier("complete");
    setShowPaymentModal(false);
    setDailyUsed(false);
  };

  const updateEmailPreferences = (type, value) => {
    const newPrefs = { ...emailPreferences, [type]: value };
    setEmailPreferences(newPrefs);
    if (userAccount) {
      const updatedUser = { ...userAccount, emailPreferences: newPrefs };
      setUserAccount(updatedUser);
      localStorage.setItem("soulStepsUser", JSON.stringify(updatedUser));
    }
  };

  const sendEmailCampaign = () => {
    alert(
      `Email campaign sent!\nType: ${emailCampaign.type}\nSubject: ${
        emailCampaign.subject
      }\nRecipients: ${getRecipientCount()} users`
    );
    setEmailCampaign({
      type: "announcements",
      subject: "",
      message: "",
      targetLocation: "all",
    });
  };

  const getRecipientCount = () => {
    if (emailCampaign.type === "announcements")
      return backOfficeData.announcementSubscribers;
    if (emailCampaign.type === "appUpdates")
      return backOfficeData.updateSubscribers;
    if (emailCampaign.type === "localEvents")
      return backOfficeData.localEventSubscribers;
    return 0;
  };

  const nextStep = () => {
    if (currentStep < guidance.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const reset = () => {
    setMood("");
    setGuidance(null);
    setCurrentStep(0);
  };

  if (showSignUp) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 via-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <radialGradient id="signupBg" cx="0.3" cy="0.3">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="48" fill="url(#signupBg)" />

                <g fill="#DC2626">
                  <ellipse
                    cx="40"
                    cy="30"
                    rx="1"
                    ry="8"
                    transform="rotate(-20 40 30)"
                    opacity="0.9"
                  />
                  <ellipse
                    cx="45"
                    cy="28"
                    rx="1"
                    ry="10"
                    transform="rotate(-10 45 28)"
                    opacity="0.95"
                  />
                  <ellipse cx="50" cy="26" rx="1" ry="12" opacity="1" />
                  <ellipse
                    cx="55"
                    cy="28"
                    rx="1"
                    ry="10"
                    transform="rotate(10 55 28)"
                    opacity="0.95"
                  />
                  <ellipse
                    cx="60"
                    cy="30"
                    rx="1"
                    ry="8"
                    transform="rotate(20 60 30)"
                    opacity="0.9"
                  />
                </g>

                <g fill="#1F2937">
                  <circle cx="50" cy="40" r="4" />
                  <ellipse
                    cx="48"
                    cy="52"
                    rx="3"
                    ry="6"
                    transform="rotate(-5 48 52)"
                  />
                  <ellipse
                    cx="42"
                    cy="50"
                    rx="1.5"
                    ry="4"
                    transform="rotate(-45 42 50)"
                  />
                  <ellipse
                    cx="56"
                    cy="48"
                    rx="1.5"
                    ry="4"
                    transform="rotate(30 56 48)"
                  />
                  <ellipse
                    cx="46"
                    cy="66"
                    rx="1.5"
                    ry="6"
                    transform="rotate(-10 46 66)"
                  />
                  <ellipse
                    cx="52"
                    cy="68"
                    rx="1.5"
                    ry="6"
                    transform="rotate(5 52 68)"
                  />
                </g>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome to {appName}
            </h2>
            <p className="text-gray-600">
              Create your account to start your healing journey with Kenni
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={signUpForm.name}
                onChange={(e) =>
                  setSignUpForm({ ...signUpForm, name: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={signUpForm.email}
                onChange={(e) =>
                  setSignUpForm({ ...signUpForm, email: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={signUpForm.city}
                  onChange={(e) =>
                    setSignUpForm({ ...signUpForm, city: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  value={signUpForm.state}
                  onChange={(e) =>
                    setSignUpForm({ ...signUpForm, state: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none"
                  placeholder="State"
                />
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                ⚠️ Important Notice
              </h4>
              <div className="text-xs text-red-700 space-y-2">
                <p className="font-semibold">
                  Peace Harbor is NOT a substitute for professional mental
                  health care.
                </p>
                <p>
                  This app provides general wellness support and is NOT medical
                  or therapeutic advice. It cannot diagnose, treat, or prevent
                  any medical or mental health condition.
                </p>
                <p className="font-bold">IF YOU ARE IN CRISIS:</p>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Call 988 - Suicide & Crisis Lifeline (24/7)</li>
                  <li>Text "HELLO" to 741741 - Crisis Text Line</li>
                  <li>Call 911 or go to your nearest emergency room</li>
                </ul>
                <p className="mt-2">
                  By using this app, you acknowledge that it is for
                  informational and wellness purposes only. Always consult
                  qualified healthcare professionals for medical or mental
                  health concerns.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={signUpForm.acceptedTerms}
                  onChange={(e) =>
                    setSignUpForm({
                      ...signUpForm,
                      acceptedTerms: e.target.checked,
                    })
                  }
                  className="rounded mt-1"
                />
                <span className="text-xs text-gray-700">
                  I understand that Peace Harbor is a wellness tool, not
                  professional mental health care. I agree to the Terms of
                  Service and Privacy Policy, and I understand this app does not
                  replace medical advice from qualified professionals.
                </span>
              </label>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Preferences
              </h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={emailPreferences.announcements}
                    onChange={(e) =>
                      setEmailPreferences({
                        ...emailPreferences,
                        announcements: e.target.checked,
                      })
                    }
                    className="rounded"
                  />
                  <span>Announcements & News</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={emailPreferences.appUpdates}
                    onChange={(e) =>
                      setEmailPreferences({
                        ...emailPreferences,
                        appUpdates: e.target.checked,
                      })
                    }
                    className="rounded"
                  />
                  <span>App Updates & Features</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={emailPreferences.localEvents}
                    onChange={(e) =>
                      setEmailPreferences({
                        ...emailPreferences,
                        localEvents: e.target.checked,
                      })
                    }
                    className="rounded"
                  />
                  <span>Local Events & Workshops</span>
                </label>
              </div>
            </div>
          </div>

          <button
            onClick={handleSignUp}
            disabled={
              !signUpForm.name ||
              !signUpForm.email ||
              !signUpForm.city ||
              !signUpForm.state ||
              !signUpForm.acceptedTerms
            }
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Account & Start Free
          </button>
        </div>
      </div>
    );
  }

  if (showBackOffice) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {appName} Back Office
            </h1>
            <div className="flex gap-3">
              <button
                onClick={() => setShowEmailCenter(true)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Center
              </button>
              <button
                onClick={() => setShowBackOffice(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Back to App
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-blue-500" />
                <h3 className="text-lg font-semibold">Total Users</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">
                {backOfficeData.totalUsers.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">
                Free: {backOfficeData.freeUsers} • Premium:{" "}
                {backOfficeData.premiumUsers}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-8 h-8 text-green-500" />
                <h3 className="text-lg font-semibold">Monthly Revenue</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">
                ${backOfficeData.monthlyRevenue.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">
                Conversion: {backOfficeData.conversionRate}%
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-rose-500" />
                <h3 className="text-lg font-semibold">Daily Active</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">
                {backOfficeData.dailyActiveUsers}
              </p>
              <p className="text-sm text-gray-600">Last 24 hours</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-8 h-8 text-purple-500" />
                <h3 className="text-lg font-semibold">Email Database</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">
                {backOfficeData.emailDatabase}
              </p>
              <p className="text-sm text-gray-600">Opted-in addresses</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">
                Recent Subscription Activity
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">New Premium Signup</span>
                  <span className="text-sm text-green-600 font-medium">
                    +$5.99
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Monthly Renewal</span>
                  <span className="text-sm text-blue-600 font-medium">
                    +$5.99
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">Free Trial Started</span>
                  <span className="text-sm text-gray-600">Pending</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Integration Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Squarespace Commerce</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Connected
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">metanoiawaters.com</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Active
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Payment Processing</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Operational
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Email System</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Active
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Google Sheets Database</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Syncing
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-medium text-blue-800 mb-2">
                  📊 Google Sheets Integration
                </h4>
                <p className="text-xs text-blue-700">
                  All user emails and preferences are automatically saved to
                  your linked Google Sheet for easy access and backup. Set up:
                  Drive → New → Google Sheets → Share with app service account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showEmailCenter) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Email Management Center
            </h1>
            <button
              onClick={() => setShowEmailCenter(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Back to Dashboard
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-500" />
                Email Database Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Email Addresses:</span>
                  <span className="font-bold text-blue-600">
                    {backOfficeData.emailDatabase}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Announcement Subscribers:</span>
                  <span className="font-bold">
                    {backOfficeData.announcementSubscribers}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>App Update Subscribers:</span>
                  <span className="font-bold">
                    {backOfficeData.updateSubscribers}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Local Event Subscribers:</span>
                  <span className="font-bold">
                    {backOfficeData.localEventSubscribers}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Send className="w-5 h-5 text-green-500" />
                Send Email Campaign
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Campaign Type
                  </label>
                  <select
                    value={emailCampaign.type}
                    onChange={(e) =>
                      setEmailCampaign({
                        ...emailCampaign,
                        type: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="announcements">Announcements</option>
                    <option value="appUpdates">App Updates</option>
                    <option value="localEvents">Local Events</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target Location
                  </label>
                  <select
                    value={emailCampaign.targetLocation}
                    onChange={(e) =>
                      setEmailCampaign({
                        ...emailCampaign,
                        targetLocation: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="all">All Locations</option>
                    <option value="GA">Georgia</option>
                    <option value="IL">Illinois</option>
                    <option value="TX">Texas</option>
                    <option value="WA">Washington</option>
                    <option value="FL">Florida</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={emailCampaign.subject}
                    onChange={(e) =>
                      setEmailCampaign({
                        ...emailCampaign,
                        subject: e.target.value,
                      })
                    }
                    placeholder="Enter email subject"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    value={emailCampaign.message}
                    onChange={(e) =>
                      setEmailCampaign({
                        ...emailCampaign,
                        message: e.target.value,
                      })
                    }
                    placeholder="Enter email message"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-700">
                    This will send to <strong>{getRecipientCount()}</strong>{" "}
                    subscribers
                  </p>
                </div>

                <button
                  onClick={sendEmailCampaign}
                  disabled={!emailCampaign.subject || !emailCampaign.message}
                  className="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Campaign
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
            <h3 className="text-lg font-semibold mb-4">User Database Sample</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">Location</th>
                    <th className="text-left p-2">Tier</th>
                    <th className="text-left p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleUsers.map((user, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">{user.name}</td>
                      <td className="p-2">{user.email}</td>
                      <td className="p-2">
                        {user.city}, {user.state}
                      </td>
                      <td className="p-2">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            user.tier === "complete"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {user.tier === "complete" ? "Complete" : "Lite"}
                        </span>
                      </td>
                      <td className="p-2">
                        <span className="text-green-600 text-xs">Active</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-100 border-l-4 border-red-500 p-3 mb-4 rounded">
          <p className="text-xs text-red-800">
            <strong>Crisis Support:</strong> If you're in crisis, call 988
            (Suicide & Crisis Lifeline) or text "HELLO" to 741741. Peace Harbor
            is not a substitute for professional mental health care.
          </p>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowBackOffice(true)}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <Settings className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="relative">
                <svg className="w-32 h-32" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="1"
                    opacity="0.3"
                  />

                  <g fill="#6B7280" fontSize="16" fontFamily="serif">
                    <g transform="translate(100,25)">
                      <circle
                        cx="0"
                        cy="0"
                        r="6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line
                        x1="0"
                        y1="6"
                        x2="0"
                        y2="20"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line
                        x1="-5"
                        y1="12"
                        x2="5"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </g>

                    <g transform="translate(150,50)" fill="#22C55E">
                      <circle cx="0" cy="-8" r="5" />
                      <line
                        x1="0"
                        y1="-3"
                        x2="0"
                        y2="8"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line
                        x1="-6"
                        y1="0"
                        x2="6"
                        y2="0"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="-4"
                        y1="4"
                        x2="4"
                        y2="4"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </g>

                    <g transform="translate(175,100)" fill="#EC4899">
                      <path d="M0,5 C-3,2 -3,-2 0,-5 C3,-2 3,2 0,5" />
                      <path
                        d="M-5,3 C-2,0 2,0 5,3 C2,6 -2,6 -5,3"
                        opacity="0.7"
                      />
                    </g>

                    <g transform="translate(150,150)" fill="#8B5CF6">
                      <path
                        d="M0,0 C-3,0 -5,2 -5,5 C-5,8 -3,10 0,10 C5,10 8,7 8,2 C8,-5 3,-8 -2,-8 C-8,-8 -12,-4 -12,2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </g>

                    <g transform="translate(100,175)" fill="#F59E0B">
                      <circle cx="0" cy="0" r="6" />
                      <g stroke="currentColor" strokeWidth="2">
                        <line x1="0" y1="-12" x2="0" y2="-8" />
                        <line x1="8.5" y1="-8.5" x2="6" y2="-6" />
                        <line x1="12" y1="0" x2="8" y2="0" />
                        <line x1="8.5" y1="8.5" x2="6" y2="6" />
                        <line x1="0" y1="12" x2="0" y2="8" />
                        <line x1="-8.5" y1="8.5" x2="-6" y2="6" />
                        <line x1="-12" y1="0" x2="-8" y2="0" />
                        <line x1="-8.5" y1="-8.5" x2="-6" y2="-6" />
                      </g>
                    </g>

                    <g transform="translate(50,150)" fill="#06B6D4">
                      <path
                        d="M-8,0 Q-4,-4 0,0 Q4,4 8,0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M-8,4 Q-4,0 0,4 Q4,8 8,4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </g>

                    <g transform="translate(25,100)" fill="#65A30D">
                      <ellipse cx="0" cy="2" rx="3" ry="5" />
                      <path
                        d="M0,-3 Q-2,-6 -1,-8 Q0,-7 1,-8 Q2,-6 0,-3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="currentColor"
                      />
                    </g>

                    <g transform="translate(50,50)">
                      <line
                        x1="0"
                        y1="-8"
                        x2="0"
                        y2="8"
                        stroke="#8B4513"
                        strokeWidth="2"
                      />
                      <line
                        x1="-5"
                        y1="-3"
                        x2="5"
                        y2="-3"
                        stroke="#8B4513"
                        strokeWidth="2"
                      />
                    </g>
                  </g>

                  <text
                    x="100"
                    y="105"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="bold"
                    fill="#1F2937"
                    fontFamily="sans-serif"
                  >
                    {appName}
                  </text>
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowUserProfile(true)}
                className="flex items-center gap-2 p-2 text-gray-600 hover:text-gray-800"
              >
                <User className="w-5 h-5" />
              </button>
              {subscriptionTier === "free" ? (
                <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                  <Gift className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">Lite</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                  <Crown className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm text-yellow-600">Complete</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-lg text-gray-600">
            Your companion for emotional well-being
          </p>
          <p className="text-sm text-gray-500 mt-2">
            With Kenni, your wellness companion
          </p>

          {subscriptionTier === "free" && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg inline-block">
              <p className="text-sm text-blue-700">
                {appName} Lite: Get one daily encouragement •
                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="ml-1 underline font-medium"
                >
                  Upgrade to Complete for $5.99/month
                </button>
              </p>
            </div>
          )}
        </div>

        {!guidance ? (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <radialGradient id="bgGradient" cx="0.3" cy="0.3">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </radialGradient>
                  </defs>

                  <circle cx="50" cy="50" r="48" fill="url(#bgGradient)" />

                  <g fill="#DC2626">
                    <ellipse
                      cx="35"
                      cy="25"
                      rx="2"
                      ry="18"
                      transform="rotate(-25 35 25)"
                      opacity="0.9"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="-25 35 25;-28 35 25;-25 35 25"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                    <ellipse
                      cx="40"
                      cy="22"
                      rx="2"
                      ry="20"
                      transform="rotate(-15 40 22)"
                      opacity="0.95"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="-15 40 22;-18 40 22;-15 40 22"
                        dur="2.2s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                    <ellipse
                      cx="45"
                      cy="20"
                      rx="2"
                      ry="22"
                      transform="rotate(-8 45 20)"
                      opacity="0.9"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="-8 45 20;-11 45 20;-8 45 20"
                        dur="1.8s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                    <ellipse cx="50" cy="18" rx="2" ry="24" opacity="1">
                      <animateTransform
                        attributeName="transform"
                        type="translate"
                        values="0 0;-1 -2;0 0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                    <ellipse
                      cx="55"
                      cy="20"
                      rx="2"
                      ry="22"
                      transform="rotate(8 55 20)"
                      opacity="0.9"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="8 55 20;11 55 20;8 55 20"
                        dur="1.8s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                    <ellipse
                      cx="60"
                      cy="22"
                      rx="2"
                      ry="20"
                      transform="rotate(15 60 22)"
                      opacity="0.95"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="15 60 22;18 60 22;15 60 22"
                        dur="2.2s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                    <ellipse
                      cx="65"
                      cy="25"
                      rx="2"
                      ry="18"
                      transform="rotate(25 65 25)"
                      opacity="0.9"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="25 65 25;28 65 25;25 65 25"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </ellipse>

                    <ellipse
                      cx="30"
                      cy="35"
                      rx="2"
                      ry="16"
                      transform="rotate(-35 30 35)"
                      opacity="0.8"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="-35 30 35;-38 30 35;-35 30 35"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                    <ellipse
                      cx="70"
                      cy="35"
                      rx="2"
                      ry="16"
                      transform="rotate(35 70 35)"
                      opacity="0.8"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="35 70 35;38 70 35;35 70 35"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </ellipse>

                    <ellipse
                      cx="25"
                      cy="45"
                      rx="2"
                      ry="14"
                      transform="rotate(-45 25 45)"
                      opacity="0.7"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="-45 25 45;-48 25 45;-45 25 45"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                    <ellipse
                      cx="75"
                      cy="45"
                      rx="2"
                      ry="14"
                      transform="rotate(45 75 45)"
                      opacity="0.7"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="45 75 45;48 75 45;45 75 45"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                  </g>

                  <g fill="#1F2937">
                    <circle cx="50" cy="35" r="8" />

                    <ellipse
                      cx="48"
                      cy="50"
                      rx="6"
                      ry="12"
                      transform="rotate(-5 48 50)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="-5 48 50;-8 48 50;-5 48 50;-2 48 50;-5 48 50"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </ellipse>

                    <ellipse
                      cx="38"
                      cy="48"
                      rx="3"
                      ry="10"
                      transform="rotate(-45 38 48)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="-45 38 48;-50 38 48;-45 38 48;-40 38 48;-45 38 48"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </ellipse>

                    <ellipse
                      cx="58"
                      cy="44"
                      rx="3"
                      ry="10"
                      transform="rotate(30 58 44)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="30 58 44;35 58 44;30 58 44;25 58 44;30 58 44"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </ellipse>

                    <ellipse
                      cx="45"
                      cy="70"
                      rx="3"
                      ry="12"
                      transform="rotate(-10 45 70)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="-10 45 70;-15 45 70;-10 45 70;-5 45 70;-10 45 70"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </ellipse>

                    <ellipse
                      cx="52"
                      cy="72"
                      rx="3"
                      ry="12"
                      transform="rotate(5 52 72)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="5 52 72;8 52 72;5 52 72;2 52 72;5 52 72"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </ellipse>

                    <ellipse
                      cx="42"
                      cy="82"
                      rx="4"
                      ry="2"
                      transform="rotate(-15 42 82)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="-15 42 82;-20 42 82;-15 42 82;-10 42 82;-15 42 82"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                    <ellipse
                      cx="54"
                      cy="84"
                      rx="4"
                      ry="2"
                      transform="rotate(10 54 84)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="10 54 84;15 54 84;10 54 84;5 54 84;10 54 84"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                  </g>

                  <g fill="white" opacity="0.7">
                    <text x="15" y="20" fontSize="8" fontFamily="serif">
                      ॐ
                    </text>
                    <text x="85" y="25" fontSize="6" fontFamily="serif">
                      ☪
                    </text>
                    <text x="12" y="80" fontSize="8" fontFamily="serif">
                      ✡
                    </text>
                    <text x="85" y="85" fontSize="8" fontFamily="serif">
                      ☯
                    </text>
                  </g>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Hello, I'm Kenni
              </h2>
              <p className="text-gray-600 mb-4">
                I'm here to support you with wisdom from many traditions and
                teachings. How are you feeling right now?
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-6 text-left">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  About Your Guide
                </h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>
                    <strong>Your Wellness Companion</strong>
                  </p>
                  <p className="leading-relaxed">
                    I'm here to support you through life's ups and downs,
                    drawing from wisdom traditions, mindfulness practices, and
                    positive psychology.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                    <div>• Mindfulness & Meditation</div>
                    <div>• Spiritual Integration</div>
                    <div>• Emotional Support</div>
                    <div>• Community Healing</div>
                    <div>• Positive Psychology</div>
                    <div>• Crisis Support</div>
                  </div>
                  <p className="text-xs italic mt-2 text-gray-600">
                    "Healing happens when we honor both the universal human
                    experience and the unique wisdom each person carries."
                  </p>
                </div>
              </div>

              {subscriptionTier === "free" && dailyUsed && (
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-700">
                    You've used your daily encouragement. Upgrade to {appName}{" "}
                    Complete for unlimited guidance!
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && mood.trim() && handleSubmit()
                  }
                  placeholder="Describe your current mood... (e.g., anxious, joyful, overwhelmed, grateful)"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none text-lg"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!mood.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {subscriptionTier === "free"
                  ? "Get Daily Encouragement"
                  : "Get Personalized Guidance"}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <radialGradient id="bgGradientSmall" cx="0.3" cy="0.3">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </radialGradient>
                    </defs>
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="url(#bgGradientSmall)"
                    />

                    <g fill="#DC2626">
                      <ellipse
                        cx="35"
                        cy="25"
                        rx="1.5"
                        ry="12"
                        transform="rotate(-25 35 25)"
                        opacity="0.9"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="-25 35 25;-28 35 25;-25 35 25"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                      <ellipse
                        cx="42"
                        cy="22"
                        rx="1.5"
                        ry="14"
                        transform="rotate(-15 42 22)"
                        opacity="0.95"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="-15 42 22;-18 42 22;-15 42 22"
                          dur="2.2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                      <ellipse cx="50" cy="20" rx="1.5" ry="16" opacity="1">
                        <animateTransform
                          attributeName="transform"
                          type="translate"
                          values="0 0;-1 -1;0 0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                      <ellipse
                        cx="58"
                        cy="22"
                        rx="1.5"
                        ry="14"
                        transform="rotate(15 58 22)"
                        opacity="0.95"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="15 58 22;18 58 22;15 58 22"
                          dur="2.2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                      <ellipse
                        cx="65"
                        cy="25"
                        rx="1.5"
                        ry="12"
                        transform="rotate(25 65 25)"
                        opacity="0.9"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="25 65 25;28 65 25;25 65 25"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                      <ellipse
                        cx="30"
                        cy="35"
                        rx="1.5"
                        ry="10"
                        transform="rotate(-35 30 35)"
                        opacity="0.8"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="-35 30 35;-38 30 35;-35 30 35"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                      <ellipse
                        cx="70"
                        cy="35"
                        rx="1.5"
                        ry="10"
                        transform="rotate(35 70 35)"
                        opacity="0.8"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="35 70 35;38 70 35;35 70 35"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                    </g>

                    <g fill="#1F2937">
                      <circle cx="50" cy="35" r="6" />
                      <ellipse
                        cx="48"
                        cy="48"
                        rx="4"
                        ry="8"
                        transform="rotate(-5 48 48)"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="-5 48 48;-8 48 48;-5 48 48;-2 48 48;-5 48 48"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                      <ellipse
                        cx="40"
                        cy="46"
                        rx="2"
                        ry="6"
                        transform="rotate(-45 40 46)"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="-45 40 46;-50 40 46;-45 40 46;-40 40 46;-45 40 46"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                      <ellipse
                        cx="56"
                        cy="44"
                        rx="2"
                        ry="6"
                        transform="rotate(30 56 44)"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="30 56 44;35 56 44;30 56 44;25 56 44;30 56 44"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                      <ellipse
                        cx="45"
                        cy="65"
                        rx="2"
                        ry="8"
                        transform="rotate(-10 45 65)"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="-10 45 65;-15 45 65;-10 45 65;-5 45 65;-10 45 65"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                      <ellipse
                        cx="52"
                        cy="67"
                        rx="2"
                        ry="8"
                        transform="rotate(5 52 67)"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="5 52 67;8 52 67;5 52 67;2 52 67;5 52 67"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                      <ellipse
                        cx="42"
                        cy="75"
                        rx="3"
                        ry="1.5"
                        transform="rotate(-15 42 75)"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="-15 42 75;-20 42 75;-15 42 75;-10 42 75;-15 42 75"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                      <ellipse
                        cx="54"
                        cy="77"
                        rx="3"
                        ry="1.5"
                        transform="rotate(10 54 77)"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="10 54 77;15 54 77;10 54 77;5 54 77;10 54 77"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Kenni's Reflection
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {guidance.kennieMessage}
                  </p>
                  {guidance.approaches && (
                    <div className="mt-3">
                      <span className="text-sm text-blue-600 font-medium">
                        Therapeutic approaches used:{" "}
                      </span>
                      <span className="text-sm text-gray-600">
                        {guidance.approaches.join(", ")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {subscriptionTier === "complete" &&
            guidance.spiritualWisdom.length > 1 ? (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="text-amber-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <div className="w-full">
                    <h3 className="font-semibold text-amber-800 mb-3">
                      Ancient Wisdom for Your Journey
                    </h3>
                    <p className="text-sm text-amber-700 mb-4">
                      As a {appName} Complete member, here are wisdom teachings
                      from multiple spiritual traditions to support you:
                    </p>

                    <div className="space-y-4">
                      {guidance.spiritualWisdom.map((wisdom, index) => (
                        <div key={index} className="bg-white/60 p-3 rounded-lg">
                          <h4 className="font-medium text-amber-800 text-sm mb-1">
                            {wisdom.source}
                          </h4>
                          <p className="text-amber-700 italic text-sm leading-relaxed">
                            "{wisdom.text}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <BookOpen className="text-amber-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Spiritual Wisdom ({guidance.spiritualWisdom[0].source})
                    </h3>
                    <p className="text-amber-700 italic leading-relaxed">
                      "{guidance.spiritualWisdom[0].text}"
                    </p>
                    {subscriptionTier === "free" && (
                      <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
                        💎 Upgrade to {appName} Complete to access wisdom from
                        all spiritual traditions
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {guidance.isFreeTier ? (
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Unlock Your Complete Healing Journey
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-4 text-left">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    ✨ What You'll Get with {appName} Complete:
                  </h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Personalized 6-step therapeutic guidance</li>
                    <li>
                      • Emotion-specific wisdom (sadness, grief, anger, etc.)
                    </li>
                    <li>• Neuroplasticity brain rewiring practices</li>
                    <li>• ALL spiritual traditions, not just one</li>
                    <li>• Compassionate responses tailored to your mood</li>
                    <li>• Advanced therapeutic approaches integration</li>
                  </ul>
                </div>
                <p className="text-gray-600 mb-4">
                  Transform your relationship with difficult emotions and build
                  lasting resilience
                </p>
                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold"
                >
                  Upgrade Now ($5.99/month)
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Step {currentStep + 1} of {guidance.steps.length}
                  </h3>
                  <div className="flex gap-2">
                    {guidance.steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index <= currentStep ? "bg-blue-500" : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="text-yellow-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg mb-2">
                        {guidance.steps[currentStep].title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        {guidance.steps[currentStep].action}
                      </p>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">
                          <strong>Why this helps:</strong>{" "}
                          {guidance.steps[currentStep].rationale}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  {currentStep < guidance.steps.length - 1 ? (
                    <button
                      onClick={nextStep}
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      onClick={reset}
                      className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Start Fresh
                    </button>
                  )}
                </div>
              </div>
            )}
            <div className="text-center">
              <button
                onClick={reset}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Start Over
              </button>
            </div>
          </div>
        )}

        {showPaymentModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Upgrade to {appName} Complete
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    {appName} Complete ($5.99/month)
                  </h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Unlimited therapeutic guidance</li>
                    <li>• 6-step personalized action plans</li>
                    <li>• Neuroplasticity & brain rewiring practices</li>
                    <li>• Multi-therapeutic approach integration</li>
                    <li>• All spiritual wisdom traditions (not just one)</li>
                    <li>• Emotion-specific compassionate guidance</li>
                    <li>• Progress tracking & insights</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full bg-black text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Pay with Apple Pay
                </button>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Pay with Google Pay
                </button>
                <button className="w-full border-2 border-gray-300 py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Pay with Credit Card
                </button>
              </div>

              <div className="text-xs text-gray-500 mb-4 text-center">
                Secure payment processing through metanoiawaters.com
                <br />
                Powered by Squarespace Commerce
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="flex-1 py-2 text-gray-600 border border-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpgrade}
                  className="flex-1 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Demo Upgrade
                </button>
              </div>
            </div>
          </div>
        )}

        {showUserProfile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Your Profile
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium">{userAccount?.name}</p>
                    <p className="text-sm text-gray-600">
                      {userAccount?.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <p className="text-sm text-gray-600">
                    {userAccount?.city}, {userAccount?.state}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {subscriptionTier === "free" ? (
                    <Gift className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Crown className="w-5 h-5 text-yellow-500" />
                  )}
                  <p className="text-sm text-gray-600">
                    {subscriptionTier === "free"
                      ? `${appName} Lite (Free)`
                      : `${appName} Complete ($5.99/month)`}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Email Preferences
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center justify-between">
                    <span className="text-sm">Announcements</span>
                    <input
                      type="checkbox"
                      checked={emailPreferences.announcements}
                      onChange={(e) =>
                        updateEmailPreferences(
                          "announcements",
                          e.target.checked
                        )
                      }
                      className="rounded"
                    />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-sm">App Updates</span>
                    <input
                      type="checkbox"
                      checked={emailPreferences.appUpdates}
                      onChange={(e) =>
                        updateEmailPreferences("appUpdates", e.target.checked)
                      }
                      className="rounded"
                    />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-sm">Local Events</span>
                    <input
                      type="checkbox"
                      checked={emailPreferences.localEvents}
                      onChange={(e) =>
                        updateEmailPreferences("localEvents", e.target.checked)
                      }
                      className="rounded"
                    />
                  </label>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowUserProfile(false)}
                  className="flex-1 py-2 text-gray-600 border border-gray-300 rounded-lg"
                >
                  Close
                </button>
                {subscriptionTier === "free" && (
                  <button
                    onClick={() => {
                      setShowUserProfile(false);
                      setShowPaymentModal(true);
                    }}
                    className="flex-1 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    Upgrade
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NudgeApp;
