eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([3467gjlmotuzA-Z]|[1-4]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(6($){$.fn.1V({1s:6(1W,3){7 1X=1i 1W=="1Y";3=$.1V({},$.O.2v,{1j:1X?1W:11,g:1X?11:1W,1Z:1X?$.O.2v.1Z:10,X:3&&!3.21?10:150},3);3.22=3.22||6(o){j o};3.23=3.23||3.2w;j H.Y(6(){24 $.O(H,3)})},D:6(26){j H.1k("D",26)},1z:6(26){j H.1t("1z",[26])},2x:6(){j H.1t("2x")},2y:6(3){j H.1t("2y",[3])},2z:6(){j H.1t("2z")}});$.O=6(m,3){7 V={UP:38,3g:40,3h:46,3i:9,3j:13,3k:27,3l:188,3m:33,3n:34,3o:8};7 $m=$(m).attr("1s","off").12(3.3p);7 1u;7 19="";7 1A=$.O.3q(3);7 1B=0;7 28;7 1v={29:t};7 u=$.O.3r(3,m,2A,1v);7 2a;$.1w.3s&&$(m.3t).1k("submit.1s",6(){4(2a){2a=t;j t}});$m.1k(($.1w.3s?"keypress":"keydown")+".1s",6(I){28=I.3u;switch(I.3u){1a V.UP:I.1C();4(u.14()){u.3v()}A{1l(0,E)}N;1a V.3g:I.1C();4(u.14()){u.3w()}A{1l(0,E)}N;1a V.3m:I.1C();4(u.14()){u.3x()}A{1l(0,E)}N;1a V.3n:I.1C();4(u.14()){u.3y()}A{1l(0,E)}N;1a 3.1D&&$.1E(3.1b)==","&&V.3l:1a V.3i:1a V.3j:4(2A()){I.1C();2a=E;j t}N;1a V.3k:u.1c();N;default:2B(1u);1u=2C(1l,3.1Z);N}}).2b(6(){1B++}).blur(6(){1B=0;4(!1v.29){3z()}}).3A(6(){4(1B++>1&&!u.14()){1l(0,E)}}).1k("1z",6(){7 fn=(2c.l>1)?2c[1]:11;6 2D(q,g){7 D;4(g&&g.l){1d(7 i=0;i<g.l;i++){4(g[i].D.Z()==q.Z()){D=g[i];N}}}4(1i fn=="6")fn(D);A $m.1t("D",D&&[D.g,D.o])}$.Y(1F($m.P()),6(i,o){2E(o,2D,2D)})}).1k("2x",6(){1A.1G()}).1k("2y",6(){$.1V(3,2c[1]);4("g"in 2c[1])1A.1H()}).1k("2z",6(){u.2d();$m.2d();$(m.3t).2d(".1s")});6 2A(){7 W=u.W();4(!W)j t;7 v=W.D;7 3C=$.1E(19);19=v;4(3.16==E){7 2F=$m.P();7 3D=2F.L(0,2e-1),3E=2F.L(2e+3C.l);v=3D+v+3E}A 4(3.1D&&3.16==t){7 Q=1F($m.P());4(Q.l>1){v=Q.1m(0,Q.l-1).3F(3.1b)+3.1b+v}v+=3.1b}$m.P(v);1I();$m.1t("D",[W.g,W.o]);j E}6 1l(crap,3G){4(28==V.3h){u.1c();j}7 B=$m.P();4(3.16==E){7 q=3H($(m)[0]);7 s=B.L(q-1,q),w="";4(s==" "||s=="@"){1J();u.1c();j}1d(s=q;s>0;s--){4(B.L(s,s-1)==" ")N;4(B.L(s,s-1)=="@"){w=B.L(s,q);4(w.l>5&&w.L(w.l-5,w.l)=="[/at]"){w="";N}4(B.l>q)1d(7 x=q+1;x<=B.l;x++)4(B.L(x,x-1)==" "||x==B.l){7 y=B.L(s,B.L(x,x-1)==" "?x-1:x);4(y.l>5&&y.L(y.l-5,y.l)=="[/at]"){w="";N}B=w=y}2e=s;4(w.l>15)N;B=w}}4(w=="")j}4(!3G&&B==19&&3.16==t)j;19=B;B=1K(B);4(B.l>=3.2G){$m.12(3.2H);4(!3.2f)B=B.Z();2E(B,3J,1I)}A{1J();u.1c()}};6 3H(a){7 e=0;4(!$.1w.2I){4(a.1e||a.1e=="0")e=a.1e}A try{a.2b();7 k=11;k=2J.selection.createRange();7 r=k.duplicate();r.moveToElementText(a);r.setEndPoint("EndToEnd",k);a.1e=r.2g.l-k.2g.l;a.3K=a.1e+k.2g.l;e=a.1e}catch(c){}j e}6 1F(o){4(!o){j[""]}7 Q=o.2K(3.1b);7 D=[];$.Y(Q,6(i,o){4($.1E(o))D[i]=$.1E(o)});j D}6 1K(o){4(!3.1D)j o;7 Q=1F(o);j Q[Q.l-1]}6 2h(q,2L){4(3.2h&&(1K($m.P()).Z()==q.Z())&&28!=V.3o){$m.P($m.P()+2L.L(1K(19).l));$.O.2M(m,19.l,19.l+2L.l)}};6 3z(){2B(1u);1u=2C(1I,200)};6 1I(){7 3L=u.14();u.1c();2B(1u);1J();4(3.3M){$m.1z(6(D){4(!D){4(3.1D){7 Q=1F($m.P()).1m(0,-1);$m.P(Q.3F(3.1b)+(Q.l?3.1b:""))}A $m.P("")}})}4(3L)$.O.2M(m,m.o.l,m.o.l)};6 3J(q,g){4(g&&g.l&&1B){1J();u.2N(g,q);2h(q,g[0].o);u.2O()}A{1I()}};6 2E(J,2i,3N){4(!3.2f)J=J.Z();7 g=1A.3O(J);4(g&&g.l){2i(J,g)}A 4((1i 3.1j=="1Y")&&(3.1j.l>0)){7 1L={timestamp:+24 Date()};$.Y(3.1L,6(3P,2j){1L[3P]=1i 2j=="6"?2j():2j});$.ajax({mode:"abort",port:"1s"+m.name,3Q:3.3Q,1j:3.1j,g:$.1V({q:1K(J),limit:3.X},1L),2i:6(g){7 1n=3.2k&&3.2k(g)||2k(g);1A.1M(J,1n);2i(J,1n)}})}A{u.3R();3N(J)}};6 2k(g){7 1n=[];7 2P=g.2K("\\n");1d(7 i=0;i<2P.l;i++){7 M=$.1E(2P[i]);4(M){M=M.2K("|");1n[1n.l]={g:M,o:M[0],D:3.2l&&3.2l(M,M[0])||M[0]}}}j 1n};6 1J(){$m.1N(3.2H)}};$.O.2v={3p:"ac_input",3S:"ac_results",2H:"ac_loading",2G:1,1Z:400,2f:t,1O:E,2m:t,1P:10,X:100,3M:t,1L:{},2Q:E,3T:t,3U:E,16:t,2w:6(M){j M[0]},23:11,2h:t,R:0,1D:t,1b:", ",22:6(o,J){j o.2R(24 RegExp("(?![^&;]+;)(?!<[^<>]*)("+J.2R(/([\\^\\$\\(\\)\\[\\]\\{\\}\\*\\.\\+\\?\\|\\\\])/gi,"\\\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<3V>$1</3V>");},21:E,2n:180};$.O.3q=6(3){7 g={};7 l=0;6 1O(s,2T){4(!3.2f)s=s.Z();7 i=s.indexOf(2T);4(3.2m=="2U"){i=s.Z().1z("\\\\b"+2T.Z());}4(i==-1)j t;j i==0||3.2m;};6 1M(q,o){4(l>3.1P){1G();}4(!g[q]){l++;}g[q]=o;}6 1H(){4(!3.g)j t;7 1o={},3W=0;4(!3.1j)3.1P=1;1o[""]=[];1d(7 i=0,ol=3.g.l;i<ol;i++){7 1f=3.g[i];1f=(1i 1f=="1Y")?[1f]:1f;7 o=3.23(1f,i+1,3.g.l);4(o===t)2V;7 2o=o.3Y(0).Z();4(!1o[2o])1o[2o]=[];7 M={o:o,g:1f,D:3.2l&&3.2l(1f)||o};1o[2o].2W(M);4(3W++<3.X){1o[""].2W(M);}};$.Y(1o,6(i,o){3.1P++;1M(i,o);});}2C(1H,25);6 1G(){g={};l=0;}j{1G:1G,1M:1M,1H:1H,3O:6(q){4(!3.1P||!l)j 11;4(!3.1j&&3.2m){7 1p=[];1d(7 k in g){4(k.l>0){7 c=g[k];$.Y(c,6(i,x){4(1O(x.o,q)){1p.2W(x);}});}}j 1p;}A 4(g[q]){j g[q];}A 4(3.1O){1d(7 i=q.l-1;i>=3.2G;i--){7 c=g[q.substr(0,i)];4(c){7 1p=[];$.Y(c,6(i,x){4(1O(x.o,q)){1p[1p.l]=x;}});j 1p;}}}j 11;}};};$.O.3r=6(3,m,u,1v){7 S={T:"ac_over"};7 z,C=-1,g,J="",2X=E,F,G;6 2p(){4(!2X)j;7 h=3.16==E?"<h4 id=\\"title\\">想用@提到谁？</h4>":"";F=$("<2Y/>").2q(h).1c().12(3.3S).U("2Z","41").30(2J.31);G=$("<ul/>").30(F).mouseover(6(I){4(1q(I).42&&1q(I).42.toUpperCase()==\'LI\'){C=$("li",G).1N(S.T).index(1q(I));$(1q(I)).12(S.T)}}).3A(6(I){$(1q(I)).12(S.T);u();m.2b();j t}).mousedown(6(){1v.29=E}).mouseup(6(){1v.29=t});4(3.R>0)F.U("R",3.R);2X=t}6 1q(I){7 F=I.1q;while(F&&F.tagName!="LI")F=F.parentNode;4(!F)j[];j F}6 1r(2r){z.1m(C,C+1).1N(S.T);44(2r);7 32=z.1m(C,C+1).12(S.T);4(3.21){7 K=0;z.1m(0,C).Y(6(){K+=H.1R});4((K+32[0].1R-G.1x())>G[0].clientHeight){G.1x(K+32[0].1R-G.innerHeight())}A 4(K<G.1x()){G.1x(K)}}};6 44(2r){C+=2r;4(C<0){C=z.1S()-1}A 4(C>=z.1S()){C=0}}6 45(35){j 3.X&&3.X<35?3.X:35}6 47(){G.48();7 X=45(g.l);1d(7 i=0;i<X;i++){4(!g[i])2V;7 36=3.2w(g[i].g,i+1,X,g[i].o,J);4(36===t)2V;7 li=$("<li/>").49(3.22(36,J)).12(i%2==0?"ac_even":"ac_odd").30(G)[0];$.g(li,"4a",g[i])}z=G.find("li");4(3.3T){z.1m(-1).12(S.T);C=z.l-1}A 4(3.2Q){z.1m(0,1).12(S.T);C=0}4($.fn.4b)G.4b()}6 4c(){7 p=$(m);7 c=4d(p,2e-1);4(c){7 i=p.K(),q=p.1x(),s=37(p.U("4e")),1T=[];4(isNaN(s))s=20;q=s-q;1T[\'17\']=i.17+q+c.17;1T[\'1g\']=i.1g+c.1g;1T[\'4f\']=s;j 1T}}7 4d=6(){6 a(r){7 c={"<":"&lt;",">":"&gt;",\'"\':"&quot;","\\\\":"&#92;","&":"&amp;","\'":"&#039;","\\r":"","\\n":"<br>"," ":!k?"<1h 39=\'white-space:3a-4g;\'> </1h>":"<3a 39=\'4h:hidden;2N:inline;2U-4g:N-2U;\'> </3a>"};j r.2R(/<|>|\\\'|\\"|&|\\\\|\\r\\n|\\n| /gi,6(i){j c[i]})}6 e(r){H.4i=r;H.2p()}7 k=t;4($.1w.2I&&$.1w.version<8)k=E;e.prototype={$p:11,$f:11,U:["overflowY","3b","R","paddingTop","paddingLeft","paddingRight","paddingBottom","marginTop","marginLeft","marginRight","marginBottom","fontFamily","borderStyle","borderWidth","wordWrap","fontSize","4e","overflowX"],2p:6(){7 r=H.$p=$("<2Y></2Y>"),c={opacity:0,2Z:"41",1g:0,17:0,"2g-align":"1g",zIndex:2E4},i=H.4i;$.Y(H.U,6(q,s){c[s]=i.U(s)});r.U(c);$("31").2q(r)},4j:6(r,c,i){7 q=H.$p;q.49("<1h>"+a(r)+"</1h>");H.$f=r=$("<1h>"+a(c)+"</1h>");q.2q(r);q.2q("<1h>"+a(i)+"</1h>")},4k:6(){j H.$f.2Z()}};j 6(r,c){7 i=$(r);i.g("3c")||i.g("3c",24 e(i));7 q=i.g("3c");4(!q)j{};7 s=i.P();i=s.L(0,c);7 w=s.3Y(c);s=s.L(c+1);q.4j(i,w,s);j q.4k()}}();j{2N:6(d,q){2p();g=d;J=q;47()},3w:6(){1r(1)},3v:6(){1r(-1)},3x:6(){4(C!=0&&C-8<0){1r(-C)}A{1r(-8)}},3y:6(){4(C!=z.1S()-1&&C+8>z.1S()){1r(z.1S()-1-C)}A{1r(8)}},1c:6(){F&&F.1c();z&&z.1N(S.T);C=-1},14:6(){j F&&F.is(":14")},current:6(){j H.14()&&(z.4l("."+S.T)[0]||3.2Q&&z[0])},2O:6(){7 K=3.16==t?$(m).K():4c();7 3d=F.3b();7 4m=3.3U==E?(3.16==t?K.17-3d:K.17-3d-K.4f):(3.16==t?K.17+m.1R:K.17);F.U({R:1i 3.R=="1Y"||3.R>0?3.R:$(m).R(),17:4m,1g:K.1g}).2O();4(3.21){G.1x(0);G.U({4n:3.2n,4h:\'auto\'});4($.1w.2I&&1i 2J.31.39.4n==="undefined"){7 2s=0;z.Y(6(){2s+=H.1R});7 3e=2s>3.2n;G.U(\'3b\',3e?3.2n:2s);4(!3e){z.R(G.R()-37(z.U("4o-1g"))-37(z.U("4o-right")))}}}},W:6(){7 W=z&&z.4l("."+S.T).1N(S.T);j W&&W.l&&$.g(W[0],"4a")},3R:6(){G&&G.48()},2d:6(){F&&F.remove()}}};$.O.2M=6(18,2t,2u){4(18.4p){7 1U=18.4p();1U.collapse(E);1U.moveStart("4q",2t);1U.moveEnd("4q",2u);1U.u()}A 4(18.4r){18.4r(2t,2u)}A{4(18.1e){18.1e=2t;18.3K=2u}}18.2b()}})(jQuery);',[],276,'|||options|if||function|var|||||||||data|||return||length|input||value|||||false|select|||||listItems|else|currentValue|active|result|true|element|list|this|event|term|offset|substring|row|break|Autocompleter|val|words|width|CLASSES|ACTIVE|css|KEY|selected|max|each|toLowerCase||null|addClass||visible||isAtmemode|top|field|previousValue|case|multipleSeparator|hide|for|selectionStart|rawValue|left|span|typeof|url|bind|onChange|slice|parsed|stMatchSets|csub|target|moveSelect|autocomplete|trigger|timeout|config|browser|scrollTop||search|cache|hasFocus|preventDefault|multiple|trim|trimWords|flush|populate|hideResultsNow|stopLoading|lastWord|extraParams|add|removeClass|matchSubset|cacheLength||offsetHeight|size|ret|selRange|extend|urlOrData|isUrl|string|delay||scroll|highlight|formatMatch|new||handler||lastKeyPressCode|mouseDownOnSelect|blockSubmit|focus|arguments|unbind|flagAt|matchCase|text|autoFill|success|param|parse|formatResult|matchContains|scrollHeight|firstChar|init|append|step|listHeight|start|end|defaults|formatItem|flushCache|setOptions|unautocomplete|selectCurrent|clearTimeout|setTimeout|findValueCallback|request|preStr|minChars|loadingClass|msie|document|split|sValue|Selection|display|show|rows|selectFirst|replace||sub|word|continue|push|needsInit|div|position|appendTo|body|activeItem|||available|formatted|parseInt||style|pre|height|mirror|eleh|scrollbarsVisible||DOWN|DEL|TAB|RETURN|ESC|COMMA|PAGEUP|PAGEDOWN|BACKSPACE|inputClass|Cache|Select|opera|form|keyCode|prev|next|pageUp|pageDown|hideResults|click||searchKey|str1|str2|join|skipPrevCheck|getCursorPos||receiveData|selectionEnd|wasVisible|mustMatch|failure|load|key|dataType|emptyList|resultsClass|selectLast|reverseMode|strong|nullData||charAt|||absolute|nodeName||movePosition|limitNumberOfItems||fillList|empty|html|ac_data|bgiframe|reposition|getCursorOffset|lineHeight|lineheight|wrap|overflow|ele|setContent|getPos|filter|topmode|maxHeight|padding|createTextRange|character|setSelectionRange'.split('|'),0,{}))