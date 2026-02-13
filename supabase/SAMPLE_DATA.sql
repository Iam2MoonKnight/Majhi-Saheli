-- Sample Data for Majhi Saheli NGO Website
-- Run this in Supabase SQL Editor to populate your tables with test data

-- Insert Sample Programs
INSERT INTO programs (name, description, category, impact_metric, beneficiaries_impacted) VALUES
('Girl Child Education Initiative', 'Providing quality primary and secondary education to girls in remote rural areas. Includes literacy programs, numeracy skills, and STEM education to prepare girls for higher education and employment.', 'education', 'Girls enrolled in school', 450),
('Women Literacy Program', 'Adult literacy programs for women who missed formal education. Focus on reading, writing, and basic math skills to enable economic and social participation.', 'education', 'Women completing literacy program', 280),
('Rural Health Camps', 'Regular health check-ups, maternal health awareness, immunization programs, and nutrition counseling for women and children in rural communities.', 'health', 'Healthcare consultations provided', 1200),
('Reproductive Health Services', 'Comprehensive reproductive health education and services including family planning, prenatal care, and safe delivery assistance.', 'health', 'Women receiving healthcare', 650),
('Vocational Skills Training', 'Skill development programs including tailoring, handicrafts, agriculture, and food processing to enable women to start their own enterprises.', 'training', 'Women trained in vocational skills', 320),
('Digital Literacy Program', 'Training women in basic computer skills, internet usage, and digital platforms to bridge the digital divide and create employment opportunities.', 'training', 'Women gaining digital skills', 180),
('Community Leadership Development', 'Empowering women to take leadership roles in their communities, including training in governance, public speaking, and community organization.', 'other', 'Women leaders trained', 95),
('Women Entrepreneurship Support', 'Support for women entrepreneurs including business training, microfinance access, and market linkages to create sustainable livelihoods.', 'other', 'Women-led businesses started', 125);

-- Insert Sample Saheli Posts (Community Updates)
INSERT INTO saheli_posts (title, content, category, author_id, image_url, likes) VALUES
('🎓 New School Building Inaugurated in Wardha District', 'We are thrilled to announce the inauguration of our new school building in Wardha district, Maharashtra. This facility will provide quality education to 200+ girls from surrounding villages. The building includes 8 classrooms, a library, computer lab, and a playground. Special thanks to all our donors and volunteers who made this possible!', 'event', NULL, NULL, 45),
('💪 Meet Sunita: From Student to Teacher', 'Sunita Kamble joined our education program 5 years ago as a student. Today, she has completed her B.Ed and returned to teach at our rural school. Her journey inspires dozens of girls in her village to pursue their dreams. Read her incredible story of determination and success.', 'story', NULL, NULL, 89),
('📚 Free Study Materials Available for Download', 'We have created comprehensive study materials for classes 6-10 covering Math, Science, and English. These materials are specially designed for self-study and are available in both Marathi and Hindi. Download them from our resources section and share with students in your community.', 'resource', NULL, NULL, 23),
('🏥 Annual Health Camp - Registration Open', 'Our annual health camp will be organized from March 15-20, 2026 in Yavatmal district. Free health check-ups, medicines, and consultation will be provided. Women from all nearby villages are invited to register. Limited slots available - register now!', 'event', NULL, NULL, 67),
('🌟 Celebrating 10 Years of Women Empowerment', 'As we complete 10 years of Majhi Saheli, we celebrate the impact on over 5,000 women across Maharashtra. From education to healthcare, from skills training to entrepreneurship - every milestone has been made possible by our community support. Thank you for being part of this journey!', 'story', NULL, NULL, 156);

-- Note: Users table should be populated through the signup process
-- Note: Donations table will be populated when users make donations through the website

-- Verify the data was inserted
SELECT COUNT(*) as program_count FROM programs;
SELECT COUNT(*) as post_count FROM saheli_posts;

-- Show sample data
SELECT id, name, category, beneficiaries_impacted FROM programs ORDER BY created_at;
SELECT id, title, category, likes FROM saheli_posts ORDER BY created_at;
