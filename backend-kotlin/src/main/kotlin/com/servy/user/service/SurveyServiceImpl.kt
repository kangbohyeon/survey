package com.servy.user.service

import com.servy.user.DTO.*
import com.servy.user.domain.Item
import com.servy.user.domain.Question
import com.servy.user.domain.Survey
import com.servy.user.repository.ItemRepository
import com.servy.user.repository.OptionRepository
import com.servy.user.repository.QuestionRepository
import com.servy.user.repository.SurveyRepository
import jakarta.persistence.EntityNotFoundException
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class SurveyServiceImpl(
    private val surveyRepository: SurveyRepository,
    private val questionRepository: QuestionRepository,
    private val itemRepository: ItemRepository,
    private val optionRepository: OptionRepository
) : SurveyService {

    @Transactional(readOnly = true)
    override fun getSurveys(pageable: Pageable): SurveyListResponseVo {

        val surveys = surveyRepository.findAll(pageable)
        val pageVo = PageVo(
            first = surveys.isFirst,
            last = surveys.isLast,
            totalPages = surveys.totalPages,
            totalElements = surveys.totalElements,
            pageSize = surveys.size,
            pageNumber = surveys.pageable.pageNumber
        )

        val surveyResponseVos =
            surveys.content.map { survey ->
                SurveyResponseVo(
                    id = survey.id, title = survey.title,
                    questions = survey.questions.map { question ->

                        Questions(
                            title = question.title,
                            desc = question.decp,
                            type = question.type,
                            required = question.required,
                            option =
                            Option(
                                max = question.option.first().max,
                                placeHolder = question.option.first().placeholder,
                                items = question.option.first().items.map { item ->
                                    item.item
                                }.toList()
                            )
                        )

                    })
            }.toList()

        return SurveyListResponseVo(page = pageVo, content = surveyResponseVos)

    }

    @Transactional(readOnly = true)
    override fun getSurvey(id: Int): SurveyResponseVo {

        val survey = surveyRepository.findById(id).orElseThrow {
            throw EntityNotFoundException("entity not found")
        }
        val surveyResponseVo = SurveyResponseVo(
            id = survey.id,
            title = survey.title,
            questions =
            survey.questions.map { question ->
                Questions(
                    title = question.title,
                    desc = question.decp,
                    type = question.type,
                    required = question.required,
                    option =
                    Option(
                        max = question.option.first().max,
                        placeHolder = question.option.first().placeholder,
                        items = question.option.first().items.map { item ->
                            item.item
                        }.toList()
                    )
                )
            }
        )
        return surveyResponseVo
    }

    @Transactional
    override fun save(surveyRequestDto: SurveyRequestDto) {
        val survey = Survey(title = surveyRequestDto.title)
        val surveyId = surveyRepository.save(survey)
        surveyRequestDto.questions.map { questionRequest ->
            val question = Question(
                title = questionRequest.title,
                decp = questionRequest.desc,
                type = questionRequest.type,
                required = questionRequest.required,
                surveyId = surveyId
            )
            val questionId = questionRepository.save(question)

            val option = com.servy.user.domain.Option(
                max = questionRequest.options.max ?: 0,
                placeholder = questionRequest.options.placeholder ?: "",
                question = questionId
            )
            val optionId = optionRepository.save(option)

            val items = questionRequest.options.items?.map { item ->
                Item(
                    item = item,
                    optionId = optionId
                )
            }?.toMutableList() ?: mutableListOf()
            itemRepository.saveAll(items)

        }
    }
}