import Room from "../components/Room"

export default function Product() {
    return (
        <div>
            <Room
                title="Outdoor"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante turpis, maximus ut molestie vel, consectetur eu risus. Vestibulum commodo vel odio mattis condimentum. Nam. "
                src="/imgs/img1.avif"
                description="Outdoor"
            />
            <Room
                title="Kitchen"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante turpis, maximus ut molestie vel, consectetur eu risus. Vestibulum commodo vel odio mattis condimentum. Nam. "
                src="/imgs/img2.avif"
                description="Kitchen"
            />
            <Room
                title="Living room"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante turpis, maximus ut molestie vel, consectetur eu risus. Vestibulum commodo vel odio mattis condimentum. Nam. "
                src="/imgs/img3.avif"
                description="Living room"
            />
            <Room
                title="Bathroom "
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante turpis, maximus ut molestie vel, consectetur eu risus. Vestibulum commodo vel odio mattis condimentum. Nam. "
                src="/imgs/img4.avif"
                description="Bathroom"
            />
        </div>
    )
}