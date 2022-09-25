<script>
    const noBtn = document.getElementById('no');
    const yesBtn = document.getElementById('yes');
    const ques = document.getElementById('question');
    noBtn.addEventListener("click", ()=>{
        let rand = Math.floor(Math.random() * (-30 - 30) + 1);
        let rand = Math.floor(Math.random() * (-30 - 30) + 1);
        noBtn.style.transform = "translate("+rand+"px,"+rand2+"px)";
    });
    yesBtn.addEventListener("click", ()=>{
        ques.innerHtml = "omsim alam ko naman yon"
    })
</script>