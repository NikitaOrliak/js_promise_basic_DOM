var e=document.querySelector(".logo"),t=document.querySelector("body"),n=new Promise(function(t){e.addEventListener("click",function(){t()})}),o=new Promise(function(e,t){setTimeout(function(e){return t(e)},3e3)});n.then(function(){var e=document.createElement("div");e.classList="message",e.textContent="Promise was resolved!",t.append(e)}),o.catch(function(){var e=document.createElement("div");e.classList="message error-message",e.textContent="Promise was rejected!",t.append(e)});//# sourceMappingURL=index.6b2ea0d0.js.map

//# sourceMappingURL=index.6b2ea0d0.js.map
