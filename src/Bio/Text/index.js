import React from "react"


export function Section1({ ...props }) {

    return (
        <p className="roboto">
            Hi! I'm Gabe, and I recently graduated from UC Berkeley in the spring of 2021 with a B.S. in chemistry. The academic world of chemistry was not what I had hoped for, and I decided to pivot directions after the point at which I could change majors. I was expecting chemistry at Berkeley to provide an engaging blend of rigid quantitation and creative critical thinking when approaching problems. Where I found this blend, however, was in my coding and data science courses, and so here we are!
        </p>
    )
}

export function Section2({ ...props }) {

    return (
        <p className="roboto">
            My strong interest in math lends itself to an interest in data science and machine learning in the realm of computer science. I also have cultivated an inclination for web development, as I think there is an art to constructing elegant, integrated, scalable full-stack applications. Though I had a late introduction to coding, my previous experience at Berkeley National Laboratory and as an assistant math instructor for the school has primed me to partake in a collaborative, constructive, and highly intellectual work environment. From my full stack bootcamp and computer science coursework, I have a strong foundation in both the theory and practical applications of coding. 
            And, most importantly and as can be seen from my <a href = {process.env.PUBLIC_URL + "/Transcript.pdf"}>academic record</a>, I excelled in one of the country’s most highly esteemed undergraduate chemistry programs, demonstrating that I can learn and integrate new ideas at a uniquely high level.
        </p>
    )
}

export function Section3({ ...props }) {

    return (
        <p className="roboto">
            Outside of work, I really enjoy snow/water sports and lifting weights. My two younger brothers and I grew up in Chicago, where there was no ocean and no mountains. After I came to California for school, my family moved to the mountains in Colorado, and I’ve had ample opportunity to pick up snowboarding and surfing!
        </p>

    )

}
