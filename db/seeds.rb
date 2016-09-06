class Seed
  attr_reader :seed
  def initialize
    @seed
  end

  def run
    generate_skills
  end

  def generate_skills
    10.times do
      skill = Skill.new
      skill.name = Faker::Hacker.ingverb + " " + Faker::Hacker.adjective + " " + Faker::Hacker.noun
      skill.details = Faker::Hacker.say_something_smart
      skill.level = [0, 1, 2].sample
      skill.save!
      puts "Generated skill # #{skill.id}"
    end
  end
end

seed = Seed.new
seed.run
