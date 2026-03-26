import Card from "./components/Card";

const App = () => {
    const jobOpenings = [
        {
            brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
            companyName: "Meta",
            datePosted: "5 days ago",
            post: "Frontend Engineer",
            tag1: "Full Time",
            tag2: "Junior",
            pay: "$65/hour",
            location: "Menlo Park",
        },

        {
            brandLogo:
                "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
            companyName: "Amazon",
            datePosted: "2 weeks ago",
            post: "Backend Developer",
            tag1: "Full Time",
            tag2: "Mid",
            pay: "$70/hour",
            location: "Hyderabad",
        },

        {
            brandLogo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
            companyName: "Google",
            datePosted: "1 week ago",
            post: "Cloud Engineer",
            tag1: "Full Time",
            tag2: "Senior",
            pay: "$90/hour",
            location: "Bangalore",
        },

        {
            brandLogo:
                "https://1000logos.net/wp-content/uploads/2017/03/Tesla-Logo.png",
            companyName: "Tesla",
            datePosted: "3 days ago",
            post: "Software Engineer",
            tag1: "Full Time",
            tag2: "Mid",
            pay: "$80/hour",
            location: "Austin",
        },

        {
            brandLogo:
                "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            companyName: "Microsoft",
            datePosted: "4 days ago",
            post: "Data Scientist",
            tag1: "Full Time",
            tag2: "Junior",
            pay: "$75/hour",
            location: "Seattle",
        },
    ];

    return (
        <div className="parent">
            {jobOpenings.map((job, i) => (
                <Card
                    key={i}
                    company={job.companyName}
                    datePosted={job.datePosted}
                    post={job.post}
                    tag1={job.tag1}
                    tag2={job.tag2}
                    pay={job.pay}
                    brandLogo={job.brandLogo}
                    location={job.location}
                />
            ))}
        </div>
    );
};

export default App;
